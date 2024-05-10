import variables from '../assets/scss/Home.module.scss';
import staticText from '../data/contentHome.json'; 
import image from '../../public/me.png';


export function Home(){
    return(
        <section className = {variables.home_section}>
                <div className = {variables.left_container}>
                    <p className = {variables.home_greeting}>{staticText.title}</p>
                    <p className = {variables.home_name}>{staticText.description}</p>
                    <p className = {variables.home_mytitle}>{staticText.content}</p>                  
                </div>
                <div className = {variables.right_container}>
                    <img className={variables.image_aboutme} src={image} alt="Me.png"/>
                </div>      
        </section>
    )
}


