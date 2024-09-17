import variables from '../assets/scss/Skills.module.scss';
import { FaReact } from "react-icons/fa";
import staticText from '../data/contentSkills.json'; 

const templateProps = [
    {class: "skills_left_container", data: "left"},
    {class: "skills_center_container", data: "center"},  
    {class: "skills_right_container", data: "left"}
]

export function Skills(){
    return(
        <section className = {`${variables.skills_section} protfolio_section`} id = "skills">
                <div className={variables.skills_text}>   
                    <h1 className = {variables.skills_title}>{staticText.title}</h1>
                    <p className = {variables.skills_description}>{staticText.description}</p>
                </div>
                <div className={variables.skills_templates_container}>
                    {templateProps.map((templates) => (
                    <div className = {variables[templates.class]}>
                        <label className={variables.skills_left_container_logo}><FaReact style={{fontSize: '2rem' }} /></label>
                    <p>{ (staticText.templateContent as { [key: string]: string })[templates.data] }</p>               
                    </div>
                    ))}         
                </div>                        
        </section>
    )
}

