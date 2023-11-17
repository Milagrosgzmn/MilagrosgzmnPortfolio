"use client"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useEffect } from "react";

export default function ContactForm() {

    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_KEY)
        const formulario = document.getElementById('form') as HTMLFormElement;
        const btn = document.getElementById('button');

        if (!formulario || !btn) {
            return;
        }

        const handleSubmit = (event:any) => {
            event.preventDefault();
            btn.innerHTML = 'Enviando...';

            const serviceID = 'service_forCv';
            const templateID = 'template_2qcy0qc';
            const publicKey = process.env.NEXT_PUBLIC_KEY;

            emailjs.sendForm(serviceID, templateID, formulario, publicKey)
                .then(() => {
                    btn.innerHTML = 'Enviar';
                    Swal.fire("¡Mensaje enviado!");
                    formulario.reset();
                }, (err) => {
                    btn.innerHTML = 'Enviar';
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "¡Ocurrió un error!",
                    });
                });
        };

        formulario.addEventListener('submit', handleSubmit);

        return () => {
            formulario.removeEventListener('submit', handleSubmit);
        };
    }, []);


    return (
        <form className='my-4 p-4 flex flex-col' id="form">
            <div className="field flex flex-col mt-4">
                <label className='font-medium text-xl pb-2'  htmlFor="from_name" >Nombre: </label>
                <input className='' type="text" name="from_name" id="from_name" placeholder='Jhon *' required/>
            </div>
            <div className="field flex flex-col mt-4">
                <label className='font-medium text-xl pb-2' htmlFor="email_id" >Email: </label>
                <input type="email" name="email_id" id="email_id" placeholder='jhon@gmail.com *' required/>
            </div>
            <div className="field flex flex-col mt-4">
                <label className='font-medium text-xl pb-2' htmlFor="message">Mensaje: </label>
                <textarea name="message" id="message" cols={30}rows={10} placeholder='Hola, Milagros... *' required ></textarea>
            </div>

            <input className='rounded-full text-xl text-white bg-sky-500 px-6 font-semibold mt-2 hover:bg-white hover:text-sky-500 mx-auto' type="submit" id="button" value="Enviar"/>
        </form>
)
}