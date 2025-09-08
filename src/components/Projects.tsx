import variables from '../assets/scss/Projects.module.scss';
import staticText from '../data/contentProjects.json'; 
import image1 from '../../public/image1.png';
import React, { useState, useEffect } from 'react';


const projectProps = [
    {title: "Project1", description: "Description1", image: image1},
    {title: "Project2", description: "Description2", image: image1},
    {title: "Project3", description: "Description3", image: image1}
]

export function Projects(){
        const [selectedProject, setSelectedProject] = useState(0);
        
        
        useEffect(() => {
        console.log('selectedProject state:', selectedProject);
        }, [selectedProject]);


    return(
        <section className = {`${variables.projects_section} portfolio_section`} id = "projects">
               <div className={`${variables.projects_text} scroll_animation`}>   
                    <h1 className = {variables.projects_title} onClick={() => console.log("Click")}>{staticText.title}</h1>
                    <h2 className = {variables.projects_description}>{staticText.description}</h2>
                </div> 
                <div className={variables.projects_container}>         
                    <div className={variables.projects_left_container}>
                        {projectProps.map((project, index) => (         
                                <div key={index} className={variables.project_template} onClick={() => setSelectedProject(index)}>                                  
                                    <img src = {project.image} alt = {project.title} className = {variables.project_image}/>
                                </div>                     
                        ))}
                    </div>
                    <div className = {`${variables.projects_right_container} scroll_animation`}>
                        <div className = {variables.projects_text_container}>
                            <h1 className = {variables.projects_title}>{Object.values(staticText.projects)[selectedProject].title}</h1>
                            <p className = {variables.projects_description}>{Object.values(staticText.projects)[selectedProject].content}</p>
                        </div>
                    </div>  
                </div>
        </section>
        
    )
}


