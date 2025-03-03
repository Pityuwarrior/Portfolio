import variables from '../assets/scss/Projects.module.scss';
import staticText from '../data/contentProjects.json'; 

const projectProps = [
    {title: "Project1", description: "Description1", image: "/image1.png"},
    {title: "Project2", description: "Description2", image: "image2"},
    {title: "Project3", description: "Description3", image: "image3"}
]

export function Projects(){
    return(
        <section className = {`${variables.projects_section} protfolio_section`} id = "projects">
               <div className={`${variables.projects_text} scroll_animation`}>   
                    <h1 className = {variables.projects_title}>{staticText.title}</h1>
                    <h2 className = {variables.projects_description}>{staticText.description}</h2>
                </div> 
                <div className={variables.projects_container}>
                    {projectProps.map((project, index) => (         
                            <div key = {index} className={variables.project_template}>
                                <img src = {project.image} alt = {project.title} className = {variables.project_image}/>
                                <h3 className={variables.project_title}>{project.title}</h3>
                                <p className={variables.project_description}>{project.description}</p>    
                            </div>                     
                    ))}
                </div>

        </section>
    )
}


