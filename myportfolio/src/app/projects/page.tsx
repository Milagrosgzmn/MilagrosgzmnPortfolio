import './styles.css';
export default function Projects() {

    const projects = [
        {
        title:'AUXIE',
        description:'<p>Desarrollo de un E-commerce de servicios que realicé en conjunto a un equipo de desarrolladores. La aplicación consta de las características innatas de un e-commerce (CRUD de productos, autenticación, catálogo, checkout, etc…).</p><br/><p>Además de otras como: </p><br/><ol><li>Integración de pasarela de pagos con Mercado Pago.</li><li>Administración de usuarios y gestión de claves.</li><li>Chat y notificaciones integradas.</li><li>Envío de emails con NodeMailer.</li></ol>',
        image:'/assets/auxiebg.png',
        stack:'React, Node.js, Express Js, Mongodb, Firebase, Javascript, Sass y Tailwind.',
        deploy:'',
        repo:'https://github.com/DiazAdriel0/AUXIE-App',
        },
        {
        title:'Rick and Morty',
        description:"<p>SPA (singe page aplication) desarrollada usando React para el Front End y Redux toolik como state management. Esta página te muestra de forma dinamica la información de un personaje luego de que lo añadas. Los datos se obtienes de la API <a target='_blank' href='https://rickandmortyapi.com/'>The Rick And Morty</a> y se almacenan los necesarios en una base de datos PostgreSQL a través de un Back End desarrollado en NodeJS utilizando Express.</p><br/><p>Algunos características del proyecto:</p><ol><br/><li>Registro de nuevos usuarios e inicio de sesión.</li><li>Barra de busquedas para añadir personajes.</li><li>Almacenamiento de personajes favoritos.</li><li>Filtros y ordenamientos.</li></ol>",
        image:'/assets/rickAndMortyAPI.png',
        stack:'React, Node.js, Express Js, postgreSQL, Javascript.',
        deploy:'https://rick-and-morty-seven-blond.vercel.app/',
        repo:'https://github.com/Milagrosgzmn/rick_and_morty',
        },
        {
        title:'Countries',
        description:"<p>Una SPA que consume datos de una API local, y permite la visualización de información general y detallada de distintos países, entre las funcionalidades que dispone esta APP está el filtrar y ordenar países por diferentes variables como continente, actividades, población, alfabeticamente, además de la creación de nuevos actividades a realizar en cada país, mediante un formulario controlado.</p>",
        image:'/assets/individualP.png',
        stack:'React, Node.js, Express Js, postgreSQL, Javascript.',
        deploy:'',
        repo:'https://github.com/Milagrosgzmn/cr-pi-countries',
        },
        {
        title:'Encuesta Dinámica',
        description:'Este proyecto es una solución para un desafío en el que se requería renderizar un formulario dinámico a partir de un archivo JSON. La solución implica el uso de dos servidores: uno para servir como una API que proporciona datos desde el archivo JSON y otro para responder a las solicitudes del frontend.',
        image:'/assets/surveyChallenge.png',
        stack:'React, JavaScript, Node Js, Express Js, PostgreSQL, Redux y Tailwind.',
        deploy:'https://survey-challenge.vercel.app/',
        repo:'https://github.com/Milagrosgzmn/survey_challenge',
        },
    ]
    return(
        <section className="pt-20 w-10/12 mx-auto">
            <h2 className="px-4 py-8 text-4xl font-bold ">Proyectos</h2>
            {
                projects.map(project =>(
                    <article className=" projectCard p-4 my-8" key={project.title}>
                        <div className="flex justify-between items-center">
                            <a target="_blank" href={project.deploy ? project.deploy : ''}><h3
                            className="text-2xl font-semibold 
                            hover:text-sky-500"
                            >{project.title}</h3></a>
                            <div className="bg-white rounded-full"><a  href={project.repo} target="_blank"><svg 
                            className="h-12 w-12"
                            xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg></a>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between py-6">
                            <div className='w-full md:w-3/5'
                            dangerouslySetInnerHTML={{ __html: project.description }} />
                            <div className="pt-4 w-full md:pt-0 md:w-2/6">
                                <img className="rounded-xl" src={`${project.image}`} alt={`proyecto titulado ${project.title}`} />
                            </div>
                        </div>
                        <p><span className='font-semibold'>Tecnologías: </span>{project.stack}</p>

                    </article>
                ))
            }
            
        </section>
    )
}