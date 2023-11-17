"use client"
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Avatar from '../../public/assets/27470372_7309700.jpg';
import ContactComp from '@/components/contactShort/contactComp';
import AboutComp from '@/components/aboutShort/aboutComp';
import ProjectComp from '@/components/projectsShort/projectComp';
import './styles.css';

export default function Home() {

  const [start, setstart] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const router = useRouter();
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

  const handleRedirect = ()=>{
    return router.push('/contact');
  }

  const handleScrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 return (
 <div className='sm:snap-y sm:snap-mandatory max-w-5xl w-4/5 mx-auto relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
    <section  style={sectionStyle} className='snap-center h-screen flex flex-col w-full items-center justify-evenly '>
      <div className=' flex flex-col-reverse md:flex-row  items-center justify-center'>
        <article className='p-2'>
          <h1 className='text-4xl py-2 md:text-6xl font-bold'>Hola,<br/>soy Milagros Guzmán</h1>
          <h2 className='text-2xl text-sky-600 font-semibold'>Fullstack Developer</h2>
        </article>
        <div className=' h-auto w-1/2 max-h-[17.5rem] max-w-[17.5rem] overflow-hidden rounded-full m-2'>
          <img className='h-full w-full object-cover' src={Avatar.src} alt="female avatar" />
        </div>
      </div>
      <button onClick={()=>{
        setstart(true)
        handleScrollToSection('about');
        ;
      }} className='rounded-full text-xl border-2 border-solid border-sky-500 text-white bg-sky-500 py-4 px-6 font-semibold mt-2 hover:bg-white hover:text-sky-500'>Comenzar</button>
    </section>
    <section style={sectionStyle} id='about' className='short-vers  mx-auto flex flex-col items-center'>
        <h2 className='text-sky-500 w-full text-3xl font-bold pt-4'>Sobre mí</h2>
        <div className='w-10/12'>
        <AboutComp />
        </div>
      </section>
      <section style={sectionStyle} className=' short-vers  mx-auto flex flex-col  '>
        <h2 className='text-sky-500  w-full text-3xl font-bold pt-4' >Proyectos</h2>
        <p className='pt-2 dark:text-white'>Proyectos que he realizado hasta ahora.</p>
        <div className=''>
        <ProjectComp/>
        </div>
      </section>
      <section style={sectionStyle} className=' short-vers  mx-auto flex flex-col mb-16 '>
        <h2 className='text-sky-500  w-full text-3xl font-bold py-8'>Contacto</h2>
        <p className='p-4 font-medium  dark:text-white'>Si estás interesado/a en mi trabajo o tienes alguna pregunta, ¡no dudes en contactarme!</p>
        <div className='flex w-10/12 mx-auto items-center justify-evenly flex-col md:flex-row'>
          <div className='w-10/12'>
          <ContactComp/>
          </div>
          <button onClick={handleRedirect}
          className='max-h-min rounded-full text-xl border-2 border-solid border-sky-500 text-white bg-sky-500 py-4 px-6 font-semibold mt-2 mx-2 hover:bg-white hover:text-sky-500'>¡Envíame un mensaje!</button>
        </div>
        
      </section>
   
  </div>
 );
}
