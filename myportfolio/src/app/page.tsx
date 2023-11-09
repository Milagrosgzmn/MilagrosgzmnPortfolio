"use client"
import {useState, useEffect} from 'react';
import Avatar from '../../public/assets/27470372_7309700.jpg';
import ContactComp from '@/components/contactShort/contactComp';
import AboutComp from '@/components/aboutShort/aboutComp';
import ProjectComp from '@/components/projectsShort/projectComp';

export default function Home({children}:{children:any}) {

  const [start, setstart] = useState(false)
  const [navHeight, setNavHeight] = useState(0);
    const sectionStyle = {
      paddingTop: `${navHeight}px`,
  };

  useEffect(() => {
    function updateNavHeight() {
      const navElement = document.querySelector('nav')?.offsetHeight;
      if (navElement) {
        setNavHeight(navElement);
      }
    }
    updateNavHeight(); 
    window.addEventListener('resize', updateNavHeight); 
    return () => {
      
      window.removeEventListener('resize', updateNavHeight); 
    };
  }, []);
  useEffect(()=>{
    handleStart();
  },[start])

  function handleStart(){
    const rest = document.querySelectorAll<HTMLElement>('.short-vers');
    if(rest){
      if (start) {
        rest.forEach(section=>{
          section.style.display = 'flex'
        })
        handleScrollToSection('about');
      }else{
        rest.forEach(section=>{
          section.style.display = 'none'
        })
    }
      
    }
  }

  const handleScrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 return (
 <div style={sectionStyle} className='snap-y snap-mandatory relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
    <section  className='snap-center flex flex-col w-full items-center justify-evenly h-[screen-navH]'>
      <div className='flex items-center justify-center'>
      <article className='p-2'>
        <h1 className='text-3xl'>Hola,<br/> Soy Milagros Guzmán</h1>
        <h2 className='text-md'>Fullstack Developer</h2>
      </article>
      <div className='hidden sm:block h-3/12 w-3/12 overflow-hidden rounded-full m-2'>
        <img className='h-full w-full object-cover' src={Avatar.src} alt="female avatar" />
      </div>
      </div>
      <button onClick={()=>{
        setstart(true)
        handleScrollToSection('about');
        ;
      }} className='rounded-full text-xl border-2 border-solid border-indigo-500 text-white bg-indigo-500 py-4 px-6 font-semibold mt-2 hover:bg-white hover:text-indigo-500'>Comenzar</button>
    </section>
      <section id='about' className='short-vers snap-center h-screen w-8/9 md:9/12 flex flex-col justify-center items-center'>
        <h1 className=' w-full text-3xl font-bold p-8 pt-16'>Sobre mí</h1>
        
        <AboutComp />

      </section>
      <section  className=' short-vers snap-center h-screen w-8/9 flex flex-col justify-center items-center'>
        <h1 className=' w-full text-3xl font-bold p-8' >Proyectos</h1>

        <ProjectComp/>
      </section>
      <section  className=' short-vers snap-center h-screen w-8/9 flex flex-col justify-center items-center'>
        <h1 className=' w-full text-3xl font-bold p-8'>Contacto</h1>
        <ContactComp/>
      </section>
   
  </div>
 );
}
