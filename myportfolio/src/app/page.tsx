"use client"
import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Avatar from '../../public/assets/27470372_7309700.jpg';
import ContactComp from '@/components/contactShort/contactComp';
import AboutComp from '@/components/aboutShort/aboutComp';
import ProjectComp from '@/components/projectsShort/projectComp';

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
 <div id='summary' className='sm:snap-y sm:snap-mandatory max-w-5xl w-4/5 mx-auto relative h-screen overflow-y-auto overflow-x-hidden scroll-smooth'>
    <section  style={sectionStyle} className='snap-center h-screen flex flex-col w-full items-center justify-evenly '>
      <div className=' flex flex-col-reverse md:flex-row  items-center md:justify-center'>
        <article className='p-2 flex md:flex-col'>
          <div>
          <h1 className='text-4xl py-2 md:text-6xl font-bold'>Hola,<br/>soy Milagros Guzmán</h1>
          <h2 className='text-2xl text-sky-600 font-semibold'>Fullstack Developer</h2>
          </div>
          <div className='pt-6 flex flex-col md:flex-row justify-evenly items-center w-1/3'>
            <a className="flex items-center" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/milagros-guzman-abarca-369bbb250/">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
            <div className="bg-white rounded-full"><a  href='https://github.com/Milagrosgzmn' target="_blank">
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg></a>
            </div>
            <a
              href="/assets/milagros-guzman-cv.pdf"
              download
              className="flex items-center gap-2 hover:opacity-70 transition"
            >
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect x="4" y="2" width="16" height="20" rx="2" fill="#d32f2f" stroke="#d32f2f" strokeWidth="1"/>
                <text x="8.5" y="11" font-size="3.2" fill="#fff" font-family="Arial">PDF</text>
              </svg>
              <span className="text-red-600 text-sm text-center font-semibold hidden md:inline">Descargar CV</span>
            </a>
          </div>
        </article>
        <div className=' h-auto w-1/2 max-h-[17.5rem] max-w-[17.5rem] overflow-hidden rounded-full m-2'>
          <img className='h-full w-full object-cover' src={Avatar.src} alt="female avatar" />
        </div>
      </div>
      <button onClick={()=>{
        setstart(true)
        handleScrollToSection('about');
        ;
      }} className='rounded-full text-xl border-2 border-solid border-sky-500 text-white bg-sky-500 py-2 px-6 font-semibold mt-2 hover:bg-white hover:text-sky-500'>Comenzar</button>
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
