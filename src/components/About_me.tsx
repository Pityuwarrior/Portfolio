import variables from '../assets/scss/About_me.module.scss';
import staticText from '../data/contentAboutMe.json';
import image from '../../public/me.png';
import * as iconLibrary from "react-icons/bs";
import React from "react";
import { ButtonScroll } from '@/utils/Button';

const myIcons = [
    { iconName:"BsLinkedin", href:"https://www.linkedin.com/in/norbert-nove/"},
    { iconName:"BsGithub", href:"https://github.com/Pityuwarrior"},
    { iconName:"BsInstagram", href:"https://www.instagram.com/novenorbert/"},
    { iconName:"BsYoutube", href:"https://www.youtube.com/channel/UCH2C3Z5bN174UnwE-BMaZKg"}
];

const ButtonProps = { content: "About me", href: "about_me" }

const greetingProps = [
    {class: "skills_left_container", data: "left"},
    {class: "skills_center_container", data: "center"},  
    {class: "skills_right_container", data: "left"}
]

/* 
"greeting": "I'm a ",
        "firstName": "Norbert",
        "lastName": "István Nové",
        "a" : "a",
        "myTitle": "Web Developer"
*/

export function About_me(){
    return(
        <section className = {`${variables.aboutme_section} protfolio_section`} id = "about_me" >
                <div className = {`${variables.aboutme_left_container} scroll_animation`}>
                    <div className = {variables.text_container}>
                        <h1 className = {variables.aboutme_name}>{staticText.name.greeting} <span className={variables.aboutme_firstName}> {staticText.name.firstName}</span> {staticText.name.lastName}</h1>
                        <h2 className={variables.aboutme_myTitle}>{staticText.name.a} <span className={variables.aboutme_title}> {staticText.name.myTitle}</span></h2>
                        <p className = {variables.aboutme_content}>{staticText.content}</p>
                    </div>
                    <div className={variables.aboutme_icon_container}> 
                        {myIcons.map((icons) => (
                        <li className={variables.aboutme_icons_item} key = {icons.href}>
                            <a href={icons.href} target='_blank' className={variables.aboutme_icon}>
                                {React.createElement((iconLibrary as { [key: string]: React.ElementType })[icons.iconName], {})}
                            </a>
                        </li>
                        ))}
                    </div>   
                </div>
                <div className = {`${variables.aboutme_right_container} scroll_animation`}>
                    <img className={variables.image_aboutme} src={image} alt="Me.png"/>
                </div>  
        </section>
    )
}


