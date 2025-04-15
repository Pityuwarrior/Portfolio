import variables from '../assets/scss/Contact.module.scss';
import staticText from '../data/contentContact.json';
import { Icons } from '../utils/Icons';

const ContactListProps = [
    {ContactIcon: "BsEnvelope", ContactName: "Email", href: "mailto:nove.norbert2002@gmail.com", BackgroundColor: "#c71610"},
    {ContactIcon: "BsLinkedin", ContactName: "LinkedIn", href: "https://www.linkedin.com/in/norbert-nove/", BackgroundColor: "#0077B5"},
    {ContactIcon: "BsGithub", ContactName: "GitHub", href: "https://github.com/pityuwarrior", BackgroundColor: "#24292e"},
    {ContactIcon: "BsYoutube", ContactName: "YouTube", href: "https://www.youtube.com/@Pityuwarrior", BackgroundColor: "#ff0000"},
    {ContactIcon: "BsWhatsapp", ContactName: "WhatsApp", href: "https://wa.me/qr/MYIE7OAFAANPF1", BackgroundColor: "#25d366"},
    {ContactIcon: "BsMicrosoftTeams", ContactName: "Teams", href: "https://teams.live.com/meet/9369632218048?p=eEZWqTrwixulRJxBC1", BackgroundColor: "#464EB8"},
    {ContactIcon: "BsDiscord", ContactName: "Discord", href: "https://discord.com/channels/@me/1129886212610588752", BackgroundColor: "#5865f2"},
    {ContactIcon: "BsTiktok", ContactName: "Tiktok", href: "https://www.tiktok.com/@pityuwarrior", BackgroundColor: "#010101"},
    {ContactIcon: "BsSteam", ContactName: "Steam", href: "https://steamcommunity.com/profiles/76561198350737264/", BackgroundColor: "#171A21"},
    {ContactIcon: "BsTwitch", ContactName: "Twitch", href: "https://www.twitch.tv/pityuwarrior", BackgroundColor: "#9146ff"}

]

export function Contact(){
    return(
        <section className = {`${variables.contact_section} portfolio_section`}id = "contact">
            <div className={`${variables.contact_text} scroll_animation`}>   
                <h1 className = {variables.contact_title}>{staticText.title}</h1>
                <h2 className = {variables.contact_description}>{staticText.description}</h2>
            </div>
            <div className={variables.contact_Iconsflex}>
                {ContactListProps.map((icon, index) => (
                    <div className={`${variables.contact_iconContainer} scroll_animation`} style={{ backgroundColor: icon.BackgroundColor, transitionDelay: `${1 + index * 0.1}s` }} key={index}>
                        <div className={variables.contact_icon}><Icons iconName={icon.ContactIcon} href={icon.href} /><p>{icon.ContactName}</p></div>
                    </div>
                ))}               
            </div>
        </section>
    )
}