import variables from '../assets/scss/Contact.module.scss';
import staticText from '../data/contentContact.json';
import { Icons } from '../utils/Icons';

const ContactListProps = [
    {ContactIcon: "BsEnvelope", ContactName: "Email", href: "nove.norbert2002@gmail.com", BackgroundColor: "#c71610"},
    {ContactIcon: "BsLinkedin", ContactName: "LinkedIn", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#0077B5"},
    {ContactIcon: "BsGithub", ContactName: "GitHub", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#24292e"},
    {ContactIcon: "BsYoutube", ContactName: "YouTube", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#ff0000"},
    {ContactIcon: "BsWhatsapp", ContactName: "WhatsApp", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#25d366"},
    {ContactIcon: "BsMicrosoftTeams", ContactName: "Teams", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#464EB8"},
    {ContactIcon: "BsSkype", ContactName: "Skype", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#00aff0"},
    {ContactIcon: "BsDiscord", ContactName: "Discord", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#5865f2"},
    {ContactIcon: "BsTiktok", ContactName: "Tiktok", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#010101"},
    {ContactIcon: "BsSteam", ContactName: "Steam", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#171A21"},
    {ContactIcon: "BsTwitch", ContactName: "Twitch", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#9146ff"}

]

export function Contact(){
    return(
        <section className = {`${variables.contact_section} portfolio_section`}id = "contact">
            <div className={variables.contact_text}>   
                <h1 className = {variables.contact_title}>{staticText.title}</h1>
                <h2 className = {variables.contact_description}>{staticText.description}</h2>
            </div>
            <div className={variables.contact_Iconsflex}>
                {ContactListProps.map((icon) => (
                    <div className={variables.contact_iconContainer} style={{ backgroundColor: icon.BackgroundColor }}>
                        <div className={variables.contact_icon}><Icons iconName={icon.ContactIcon} href={icon.href} /><p>{icon.ContactName}</p></div>
                    </div>
                ))}               
            </div>
        </section>
    )
}