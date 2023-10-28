"use client"

import Link from "next/link";
import NightsStayRoundedIcon from '@mui/icons-material/NightsStayRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import {useState, useEffect} from 'react';
import './nav.css';

export default function NavBar() {

    const [theme, setTheme] = useState("light");

    function handleChangeTheme(){
        setTheme((prevTheme)=>prevTheme === "light" ? "dark" : "light");
    }

    useEffect(() => {
      if (theme=== "dark") {
        document.querySelector("html")?.classList.add('dark');
      }else{
        document.querySelector("html")?.classList.remove('dark');
        document.querySelector("html")?.classList.add('light');
      }
      
    }, [theme])
    

    return(
        <nav className="flex w-full">
            <div></div>
            <ul className="w-3/4 flex justify-around p-4
            ">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
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
        </nav>
    );
}