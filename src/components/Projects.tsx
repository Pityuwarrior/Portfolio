import variables from '../assets/scss/Projects.module.scss';
import staticText from '../data/contentProjects.json'; 
import image1 from '../../public/image1.png';
import { PictureEventListener } from '../utils/PictureEventListener';

const projectProps = [
    {title: "Project1", description: "Description1", image: "image1.png"},
    {title: "Project2", description: "Description2", image: "image2"},
    {title: "Project3", description: "Description3", image: "image3"}
]

export function Projects(){
    return(
        <section className = {`${variables.projects_section} portfolio_section`} id = "projects">
               <div className={`${variables.projects_text} scroll_animation`}>   
                    <h1 className = {variables.projects_title} onClick={() => console.log("Click")}>{staticText.title}</h1>
                    <h2 className = {variables.projects_description}>{staticText.description}</h2>
                </div> 
                <div className={variables.projects_container}>         
                    <div className={variables.projects_left_container}>
                        {projectProps.map((project, index) => (         
                                <div 
                                    key={index} className={variables.project_template} onClick={(event) => PictureEventListener(event)}>                                  
                                    <img src = {project.image} alt = {project.title} className = {variables.project_image}/>
                                    <h3 className={variables.project_title}>{project.title}</h3>
                                    <p className={variables.project_description}>{project.description}</p>    
                                </div>                     
                        ))}
                    </div>
                    <div className = {`${variables.projects_right_container} scroll_animation`}>
                        <div className = {variables.projects_text_container}>
                            <h1 className = {variables.projects_title}>{"staticText.right.title"}</h1>
                            <p className = {variables.projects_description}>{"staticText.right.description"}</p>
                        </div>
                    </div>  
                </div>
        </section>
    )
}


