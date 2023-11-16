import ContactComp from "@/components/contactShort/contactComp";
import ContactForm from "@/components/form/form";

export default function Contact() {
    return(
        <section className="pt-20 w-11/12 lg:w-10/12 mx-auto">
            <h2 className="py-8 text-4xl font-bold text-sky-500">Contacto</h2>
            <div className="flex justify-between flex-col md:flex-row">
                <article>
                    <h3 className="text-xl font-medium pb-2">¡Conversemos!</h3>
                    <p className="w-4/5">Puedes comunicarte conmigo completando el formulario que se encuentra debajo o en mis redes sociales, y te responderé tan pronto como pueda.</p>
                    <ContactForm/>
                </article>
                <div className="w-1/2 lg:w-2/5 px-2">
                    <ContactComp/>
                </div>
            </div>
        </section>
    )
}