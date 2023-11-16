"use client"

import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { link } from 'fs';

import { useState, useEffect } from "react";

export default function Slider() {

    const slides =[
        {url: '/assets/auxiebg.png'},
        {url: '/assets/individualP.png'},
        {url: '/assets/rickAndMortyAPI.png'},
        {url: '/assets/surveyChallenge.png'},
    ]
    const repository =[
        {link:'https://github.com/DiazAdriel0/AUXIE-App'},
        {link:'https://github.com/Milagrosgzmn/cr-pi-countries'},
        {link:'https://github.com/Milagrosgzmn/rick_and_morty'},
        {link:'https://github.com/Milagrosgzmn/survey_challenge'}
    ]

    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = ()=>{
        const lastSlide = currentImage === slides.length-1;
        const newIndex = lastSlide ? 0 : currentImage+1;
        setCurrentImage(newIndex);
    }
    const prevSlide = ()=>{
        const firstSlide = currentImage === 0;
        const newIndex = firstSlide?  slides.length-1 : currentImage -1;
        setCurrentImage(newIndex);
    }
    const goToSlide = (index:number)=>{
        setCurrentImage(index);
    }

    return(
        <div className=" max-w-[36.8rem] h-[23rem]  w-full mx-auto py-8 px-4 relative group">
            <div style={{backgroundImage:`url(${slides[currentImage].url})`}}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500 ease">
                <div className="absolute inset-3.5 rounded-2xl flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="bg-white rounded-full"><a  href={repository[currentImage].link} target="_blank"><svg 
                            className="h-12 w-12"
                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg></a>
                            </div>
        </div>
            </div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 left-5 rounded-full mx-2 bg-black/20 cursor-pointer"
            onClick={prevSlide}>
                <ArrowLeftRoundedIcon className='text-white text-7xl'></ArrowLeftRoundedIcon>
            </div>
            <div className="hidden group-hover:block absolute top-1/2 -translate-x-0 -translate-y-1/2 right-5 rounded-full mx-2 bg-black/20 cursor-pointer"
            onClick={nextSlide}>
                <ArrowRightRoundedIcon className='text-white text-7xl'></ArrowRightRoundedIcon>
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, i)=>(
                    <div 
                    key={i}
                    onClick={()=>goToSlide(i)}
                    className="p-2 cursor-pointer"
                    >
                    <CircleRoundedIcon className='p-0.5 text-base 
                     hover:text-sky-500 '></CircleRoundedIcon>
                    </div>
                ))
                }
            </div>
            
        </div>
    )
}