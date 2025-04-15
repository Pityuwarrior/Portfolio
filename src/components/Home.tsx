import variables from '../assets/scss/Home.module.scss';
import staticText from '../data/contentHome.json';
import { ButtonScroll } from '@/utils/Button';

const ButtonProps = { content: "About me", href: "about_me" }

export function Home(){
    return(
        <section className = {`${variables.home_section} portfolio_section`} id = "home">
                <div className = {variables.text_container}>
                    <p className = {variables.home_greeting}>{staticText.welcome}<span className={variables.home_title}> {staticText.title}</span></p>
                    <p className = {`${variables.home_description} scroll_animation`}>{staticText.description}</p>
                </div>
                <div className={`${variables.home_button} scroll_animation`}><ButtonScroll{...ButtonProps}/></div>
        </section>
    )
}