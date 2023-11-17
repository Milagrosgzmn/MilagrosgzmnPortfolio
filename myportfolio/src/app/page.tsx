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
            <a className="flex items-center" target="_blank" rel="noreferrer" href="https://wa.me/5491157421722">
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                <path fill="#f2faff" d="M4.221,29.298l-0.104-0.181c-1.608-2.786-2.459-5.969-2.458-9.205 C1.663,9.76,9.926,1.5,20.078,1.5c4.926,0.002,9.553,1.919,13.03,5.399c3.477,3.48,5.392,8.107,5.392,13.028 c-0.005,10.153-8.268,18.414-18.42,18.414c-3.082-0.002-6.126-0.776-8.811-2.24l-0.174-0.096l-9.385,2.46L4.221,29.298z"></path><path fill="#788b9c" d="M20.078,2L20.078,2c4.791,0.001,9.293,1.867,12.676,5.253C36.137,10.639,38,15.14,38,19.927 c-0.005,9.878-8.043,17.914-17.927,17.914c-2.991-0.001-5.952-0.755-8.564-2.18l-0.349-0.19l-0.384,0.101l-8.354,2.19 l2.226-8.131l0.11-0.403L4.55,28.867c-1.566-2.711-2.393-5.808-2.391-8.955C2.163,10.036,10.202,2,20.078,2 M20.078,1 C9.651,1,1.163,9.485,1.158,19.912c-0.002,3.333,0.869,6.588,2.525,9.455L1,39.169l10.03-2.63c2.763,1.507,5.875,2.3,9.042,2.302 h0.008c10.427,0,18.915-8.485,18.92-18.914c0-5.054-1.966-9.807-5.538-13.382C29.89,2.971,25.14,1.002,20.078,1L20.078,1z"></path><path fill="#79ba7e" d="M19.995,35c-2.504-0.001-4.982-0.632-7.166-1.823l-1.433-0.782l-1.579,0.414l-3.241,0.85l0.83-3.03	l0.453-1.656L7,27.485c-1.309-2.267-2.001-4.858-2-7.492C5.004,11.726,11.732,5.001,19.998,5c4.011,0.001,7.779,1.563,10.61,4.397	C33.441,12.231,35,15.999,35,20.005C34.996,28.273,28.268,35,19.995,35z"></path><path fill="#fff" d="M28.28,23.688c-0.45-0.224-2.66-1.313-3.071-1.462c-0.413-0.151-0.712-0.224-1.012,0.224	c-0.3,0.45-1.161,1.462-1.423,1.761c-0.262,0.3-0.524,0.337-0.974,0.113c-0.45-0.224-1.899-0.7-3.615-2.231	c-1.337-1.191-2.239-2.663-2.501-3.113c-0.262-0.45-0.029-0.693,0.197-0.917c0.202-0.202,0.45-0.525,0.674-0.787	c0.224-0.262,0.3-0.45,0.45-0.75c0.151-0.3,0.075-0.563-0.038-0.787c-0.113-0.224-1.012-2.437-1.387-3.336	c-0.364-0.876-0.736-0.757-1.012-0.771c-0.262-0.014-0.562-0.015-0.861-0.015c-0.3,0-0.787,0.113-1.198,0.563	c-0.411,0.45-1.573,1.537-1.573,3.749s1.611,4.35,1.835,4.649c0.224,0.3,3.169,4.839,7.68,6.786	c1.072,0.462,1.911,0.739,2.562,0.947c1.076,0.342,2.057,0.294,2.832,0.178c0.864-0.129,2.66-1.087,3.034-2.136	c0.375-1.049,0.375-1.95,0.262-2.136C29.03,24.025,28.731,23.912,28.28,23.688z"></path>
              </svg>
            </a>
            <a className="flex items-center" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/milagros-guzman-abarca-369bbb250/">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
              </svg>
            </a>
            <div className="bg-white rounded-full"><a  href='' target="_blank">
              <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg></a>
            </div>
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
