import variables from '../assets/scss/About_me.module.scss';
import staticText from '../data/contentAboutMe.json';
import image from '../../public/me.png';
import { ButtonScroll } from '@/utils/Button';
import { Icons } from '../utils/Icons';



const myIcons = [
    { iconName: "BsLinkedin", href: "https://www.linkedin.com/in/norbert-nove/"},
    { iconName: "BsGithub", href: "https://github.com/pityuwarrior"},
    { iconName: "BsInstagram", href: "https://www.instagram.com/novenorbert/"},
    { iconName: "BsYoutube", href: "https://www.youtube.com/@Pityuwarrior"}
];

const sex = {iconName: "BsLinkedin", href: "cat.org"}

const ButtonPropsCV = { content: "Download CV", href: "home" }
const ButtonProps = { content: "Skills", href: "skills" }

const greetingProps = [
    {class: "skills_left_container", data: "left"},
    {class: "skills_center_container", data: "center"},  
    {class: "skills_right_container", data: "left"}
]


export function About_me(){
    return(
        <section className = {`${variables.aboutme_section} portfolio_section`} id = "about_me" >
                <div className = {`${variables.aboutme_left_container} scroll_animation`}>
                    <div className = {variables.text_container}>
                        <h1 className = {variables.aboutme_name}>{staticText.name.greeting} <span className={variables.aboutme_firstName}> {staticText.name.firstName}</span> {staticText.name.lastName}</h1>
                        <h2 className = {variables.aboutme_myTitle}>{staticText.name.a} <span className={variables.aboutme_title}> {staticText.name.myTitle}</span></h2>
                        <p className = {variables.aboutme_content}>{staticText.content}</p>
                    </div>
                    <div className={variables.aboutme_icon_container}> 
                    {myIcons.map((icon) => (
                        <Icons iconName={icon.iconName} href={icon.href} />
                    ))}
                    </div>                  
                    <div className={variables.aboutme_button_container}> 
                        <ButtonScroll{...ButtonPropsCV}/>  
                        <ButtonScroll{...ButtonProps}/>
                    </div> 
                </div>
                <div className = {`${variables.aboutme_right_container} scroll_animation`}>
                    <img className={variables.image_aboutme} src={image} alt="Me.png"/>
                </div>  
        </section>
    )
}


