import variables from '../assets/scss/About_me.module.scss';
import { FaReact } from "react-icons/fa";
import staticText from '../data/contentAboutMe.json'; 

const templateProps = [
    {class: "aboutme_left_container", data: "left"},
    {class: "aboutme_center_container", data: "center"},  
    {class: "aboutme_right_container", data: "left"}
]

export function About_me(){
    return(
        <section className = {`${variables.aboutme_section} protfolio_section`} id = "about_me">
                <div className={variables.aboutme_text}>   
                    <h1 className = {variables.aboutme_title}>{staticText.title}</h1>
                    <p className = {variables.aboutme_description}>{staticText.description}</p>
                </div>
                <div className={variables.aboutme_templates_container}>
                    {templateProps.map((templates) => (
                    <div className = {variables[templates.class]}>
                        <label className={variables.aboutme_left_container_logo}><FaReact style={{fontSize: '2rem' }} /></label>
                    <p>{ (staticText.templateContent as { [key: string]: string })[templates.data] }</p>               
                    </div>
                    ))}         
                </div>                        
        </section>
    )
}


