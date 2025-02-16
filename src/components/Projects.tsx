import variables from '../assets/scss/Projects.module.scss';
import staticText from '../data/contentProjects.json'; 

const projectProps = [
    {title: "Project1", description: "Description1", image: "image1"},
    {title: "Project2", description: "Description2", image: "image2"},
    {title: "Project3", description: "Description3", image: "image3"},
    {title: "Project4", description: "Description4", image: "image4"},
    {title: "Project5", description: "Description5", image: "image5"},
    {title: "Project6", description: "Description6", image: "image6"}
]

export function Projects(){
    return(
        <section className = {`${variables.projects_section} protfolio_section`} id = "projects">
               <div className={`${variables.projects_text} scroll_animation`}>   
                    <h1 className = {variables.projects_title}>{staticText.title}</h1>
                    <h2 className = {variables.projects_description}>{staticText.description}</h2>
                </div> 
                

        </section>
    )
}


