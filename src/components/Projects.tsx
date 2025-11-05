import variables from '../assets/scss/Projects.module.scss';
import staticText from '../data/contentProjects.json'; 
import React, { useState, useEffect } from 'react';
import image1 from '../../public/images/image1.png';
import image2 from '../../public/images/image2.png';
import image3 from '../../public/images/image3.png';
import { SiIcons } from '../utils/Icons';

const images = [image1, image2, image3];

export function Projects(){
    
    const [selectedProject, setSelectedProject] = useState(0);
    
    const technologiesListProps = [ 

    ]

    return(
        <section className = {`${variables.projects_section} portfolio_section`} id = "projects">
               <div className={`${variables.projects_text} scroll_animation`}>   
                    <h1 className = {variables.projects_title} onClick={() => console.log("Click")}>{staticText.title}</h1>
                    <h2 className = {variables.projects_description}>{staticText.description}</h2>
                </div> 
                <div className={variables.projects_container}>         
                    <div className={variables.projects_left_container}>
                        {Object.values(staticText.projects).map((project, index) => (         
                            <div key={index} className={variables.project_template} onClick={() => setSelectedProject(index)}>                                  
                                <img src={images[index]} alt = {project.title} className = {variables.project_image }/>
                                <p className={variables.project_title}>{index}</p>                     
                            </div>                     
                        ))}
                    </div>
                    <div className = {`${variables.projects_right_container} scroll_animation`}>
                        <div className = {variables.projects_text_container}>
                            <h1 className = {variables.projects_title}>{Object.values(staticText.projects)[selectedProject].title}</h1>
                            <p className = {variables.projects_description}>{Object.values(staticText.projects)[selectedProject].content}</p>
                            <h2 className = {variables.projects_technologies_title}>Technologies:</h2>                          
                            {Object.values(staticText.projects[selectedProject].technologies).map((technology) => (
                                <SiIcons iconName = {technology.logo} />
                            ))}
                        </div>
                    </div>  
                </div>
        </section>
        
    )
}


