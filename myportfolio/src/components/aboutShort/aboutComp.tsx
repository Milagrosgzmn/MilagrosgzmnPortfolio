import Icons from "../icons/icons";
export default function AboutComp() {
    return(
        <article className="mb-8 flex flex-col sm:flex-row
        dark:text-white">
            <div className="w-full sm:w-1/2 py-4">
            <p className="text-2xl py-2 font-medium">¡Hola de nuevo! 😄</p>
            <br />
            < p>Me llamo Milagros, pero todos me dicen <span className="border-2 border-x-transparent border-t-transparent font-medium border-b-sky-500">Mili</span>. </p>
            <p className="py-2"> Resido en <span className="font-medium"> Buenos Aires</span>, <span className="font-medium">Argentina</span>, y estoy comenzando en el mundo de IT como Desarrolladora Full Stack, con muchas ganas de aprender.</p>
            <p>¡Sigamos construyendo cosas increíbles juntos! 🚀</p>
            </div>
            <div className="flex flex-col m-auto">
                <h3 className="font-medium ">Tecnologías con las que he trabajado: </h3>
            <Icons/>
            </div>
        </article>
    );
}