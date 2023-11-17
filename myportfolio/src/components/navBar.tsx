"use client"

import Link from "next/link";
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {useState, useEffect} from 'react';
import { usePathname } from "next/navigation";
import './nav.css';

export default function NavBar() {
    const links = [
        {name: 'Inicio', link:'/'},
        {name: 'Sobre mí', link:'/about'},
        {name: 'Contacto', link:'/contact'},
        {name: 'Proyectos', link:'/projects'},
    ]
    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(false);

   
    const pathname= usePathname();

    function handleChangeTheme(){
        setTheme((prevTheme)=>prevTheme === "light" ? "dark" : "light");
    }
    function handleDisp (){
        const cont:HTMLElement | null= document.querySelector('.content-cont');
        if(cont){
            if (open) {
                cont.style.opacity = '0';
                cont.style.pointerEvents = 'none'; 
            }else{
                setTimeout(()=>{
                    cont.style.opacity = '1';
                    cont.style.pointerEvents = 'auto';
                },300)
                
            }
        }
       
    }

    useEffect(()=>{
        if (pathname) {
            const liElement = document.getElementById(`${pathname}`);
            liElement?.classList.add('active');

            const liArray = document.getElementsByClassName('lisElement');
            for (let i = 0; i < liArray.length; i++) {
                const element = liArray[i];
                if (element.getAttribute('id') !== pathname) {
                    element.classList.remove('active');
                }
            }
        }
    },[pathname])

    useEffect(() => {
        if (theme=== "dark") {
            document.querySelector("html")?.classList.add('dark');
            document.querySelector("html")?.classList.remove('light');
          }else{
            document.querySelector("html")?.classList.remove('dark');
            document.querySelector("html")?.classList.add('light');
          }
      
    }, [theme])
    useEffect(()=>{
        handleDisp();
    },[open])

    return(
        <nav className="md:flex w-full  h-[4.5rem] fixed z-10 items-center justify-between bg-white md:px-10 px-4 ">
            <div></div>
            <div  onClick={()=>{
                setOpen(!open);
            }}>{
                open ? <div><CloseRoundedIcon className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"/></div>
                 : <div><MenuRoundedIcon className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"/></div>
            }
            </div>
            <ul className={`bg-white md:flex md:w-auto md:pb-0 md:items-center left-0 w-full absolute md:static
            md-pl-0 pl-9 transition-opacity ease-out duration-500

             ${open ? 'top-20 opacity-100' :'opacity-0 top-[-490px]'}
              md:opacity-100`}>
                {links.map(link=>(
                    <li id={link.link} className='lisElement z-2 md:ml-8 text-xl md:my-0 my-7' key={link.name}>
                        <Link onClick={()=>{
                        setOpen(false);
                        
                    }} href={link.link} >
                            <span className="relative ">
                                <span className="subrayar relative not-hover
                                md:after:absolute
                                md:after:h-1 md:after:bg-sky-500 md:after:w-[0%] md:after:ease
                                md:after:rounded-xl 
                                md:after:transition-all md:after:duration-300 md:after:delay-75 md:after:left-0 md:after:bottom-[-5px] md:after:content-'' md:hover:after:w-[100%] ">
                                {link.name}
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            
            <div id="theme" className="w-36 
            justify-items-end  px-4 py-2
            ">
                <label className="
                w-12 h-12
                rounded-full
                cursor-pointer
                flex justify-center
                items-center
                " >
                    <input onChange={handleChangeTheme} type="checkbox" name="" id="check-them"/>
                    
                <LightModeRoundedIcon className="sun"/>
                <span id="toggle" className="
                absolute w-12 h-12
                rounded-full
                block"
                style={{
                    boxShadow: 'inset 0 0 0 60px rgba(0, 0, 0, 0.1)'                
                  }}
                ></span>
                <NightsStayRoundedIcon className="moon"/>
                </label>
               
            </div>
            </ul>
        </nav>
    );
}