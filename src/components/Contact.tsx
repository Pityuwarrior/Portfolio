import variables from '../assets/scss/Contact.module.scss';
import staticText from '../data/contentContact.json';
import { Icons } from '../utils/Icons';

const contactListProps = [
    {ContactIcon: "SiGmail", ContactName: "Email", href: "mailto:nove.norbert2002@gmail.com", BackgroundColor: "#c71610"},
    {ContactIcon: "SiLinkedin", ContactName: "LinkedIn", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#0077B5"},
    {ContactIcon: "SiGithub", ContactName: "GitHub", href: "https://github.com/pityuwarrior", BackgroundColor: "#24292e"},
    {ContactIcon: "SiYoutube", ContactName: "YouTube", href: "https://www.youtube.com/@Pityuwarrior", BackgroundColor: "#ff0000"},
    {ContactIcon: "SiInstagram", ContactName: "Instagram", href: "https://www.instagram.com/novenorbert/", BackgroundColor: "#cd486b"},
    {ContactIcon: "SiWhatsapp", ContactName: "WhatsApp", href: "https://wa.me/qr/MYIE7OAFAANPF1", BackgroundColor: "#25d366"},
    {ContactIcon: "SiTypst", ContactName: "Teams", href: "https://teams.live.com/meet/9369632218048?p=eEZWqTrwixulRJxBC1", BackgroundColor: "#464EB8"},
    {ContactIcon: "SiTiktok", ContactName: "Tiktok", href: "https://www.tiktok.com/@pityuwarrior", BackgroundColor: "#010101"},
    {ContactIcon: "SiTwitch", ContactName: "Twitch", href: "https://www.twitch.tv/pityuwarrior", BackgroundColor: "#9146ff"}
]

export function Contact(){
    return(
        <section className = {`${variables.contact_section} portfolio_section`}id = "contact">
            <div className={`${variables.contact_text} scroll_animation`}>   
                <h1 className = {variables.contact_title}>{staticText.title}</h1>
                <h2 className = {variables.contact_description}>{staticText.description}</h2>
            </div>
            <div className={variables.contact_Iconsflex}>
                {contactListProps.map((icon, index) => (
                    <a href={icon.href} style={{textDecoration: "none"}} target='_blank'> 
                        <div className={`${variables.contact_iconContainer} scroll_animation`} style={{ backgroundColor: icon.BackgroundColor, transitionDelay: `${1 + index * 0.1}s` }} key={index}>
                            <div className={variables.contact_icon}><Icons iconName={icon.ContactIcon} href={icon.href} /><p>{icon.ContactName}</p></div>
                    </div> 
                    </a>
                ))}               
            </div>
        </section>
    )
}