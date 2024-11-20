import variables from '../assets/scss/Contact.module.scss';
import staticText from '../data/contentContact.json';

export function Contact(){
    return(
        <section className = {`${variables.contact_section} protfolio_section`}id = "contact">
            <div className={variables.contact_text}>   
                <h1 className = {variables.contact_title}>{staticText.title}</h1>
                <h2 className = {variables.contact_description}>{staticText.description}</h2>
            </div>
        </section>
    )
}