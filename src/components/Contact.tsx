import variables from '../assets/scss/Contact.module.scss';
import staticText from '../data/contentContact.json';
import { Icons } from '../utils/Icons';

const ContactListProps = [
    {ContactIcon: "BsEnvelope", ContactName: "Email", href: "nove.norbert2002@gmail.com", BackgroundColor: "red"},
    {ContactIcon: "BsLinkedin", ContactName: "LinkedIn", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "blue"},

]

export function Contact(){
    return(
        <section className = {`${variables.contact_section} protfolio_section`}id = "contact">
            <div className={variables.contact_text}>   
                <h1 className = {variables.contact_title}>{staticText.title}</h1>
                <h2 className = {variables.contact_description}>{staticText.description}</h2>
            </div>
            <div className={variables.contact_flex}>
                <div className={variables.innerflex}>
                    {ContactListProps.map((icon) => (
                        <div className={variables.contact_iconContainer} style={{ backgroundColor: icon.BackgroundColor }}>
                            <div className={variables.contact_icon}><Icons iconName={icon.ContactIcon} href={icon.href} /><p></p></div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}