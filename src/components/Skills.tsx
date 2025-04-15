import variables from '../assets/scss/Skills.module.scss';
import { FaReact } from "react-icons/fa";
import staticText from '../data/contentSkills.json';
import { Icons } from '../utils/Icons';

const templateProps = [
    {Containerclass: "skills_left_container", title: "templateContent.left.title", content: "templateContent.left.content", icon: "BsCodeSlash"},
    {Containerclass: "skills_center_container", title: "templateContent.center.title", content: "templateContent.center.content", icon: "BsReact"}, 
    {Containerclass: "skills_right_container", title: "templateContent.right.title", content: "templateContent.right.content", icon: "BsDatabase"}
]

function readKey (key: string, staticText: { [key: string]: any }): any {
    const parts = key.split('.')
    let value = staticText
    for(const part of parts) {
        value = value[part] ?? null;
      }
      return value;
}
export function Skills(){
    return(
        <section className = {`${variables.skills_section} portfolio_section`} id = "skills">
                <div className={`${variables.skills_text} scroll_animation`}>   
                    <h1 className = {variables.skills_title}>{staticText.title}</h1>
                    <h2 className = {variables.skills_description}>{staticText.description}</h2>
                </div>
                <div className={`${variables.skills_templates_container} portfolio_section scroll_animation`}>
                    {templateProps.map((templates) => (
                    <div className = {`${variables[templates.Containerclass]}`}>
                        <label className={variables.skills_left_container_logo}></label>
                        <h1>{readKey(templates.title, staticText)}</h1>  
                        <p>{readKey(templates.content, staticText)}</p>     
                    </div>
                    ))}         
                </div>                        
        </section>
    )
}

