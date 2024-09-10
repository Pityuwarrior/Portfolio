import variables from '../assets/scss/Home.module.scss';
import staticText from '../data/contentHome.json'; 
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

export function Home(){
    return(
        <section className = {`${variables.home_section} protfolio_section`} id = "home" >
                <div className = {variables.home_left_container}>
                    <div className = {variables.text_container}>
                        <p className = {variables.home_greeting}>{staticText.title}</p>
                        <p className = {variables.home_name}>{staticText.description}</p>
                        <p className = {variables.home_mytitle}>{staticText.content}</p>
                    </div>
                    <div className={variables.home_icon_container}> 
                        {myIcons.map((icons) => (
                        <li className={variables.home_icons_item} key = {icons.href}>
                            <a href={icons.href} target='_blank' className={variables.home_icon}>
                                {React.createElement((iconLibrary as { [key: string]: React.ElementType })[icons.iconName], {})}
                            </a>
                        </li>
                        ))}
                    </div>   
                        <ButtonScroll{...ButtonProps}/>
                </div>
                <div className = {variables.home_right_container}>
                    <img className={variables.image_aboutme} src={image} alt="Me.png"/>
                </div>  
        </section>
    )
}


