import variables from '../assets/scss/Home.module.scss';
import staticText from '../data/contentHome.json';
import { ButtonScroll } from '@/utils/Button';

const ButtonProps = { content: "About me", href: "about_me" }

export function Home(){
    return(
        <section className = {`${variables.home_section} protfolio_section`} id = "home">
                <div className = {variables.text_container}>
                    <p className = {variables.home_greeting}>{staticText.greeting}<span className={variables.home_title}> {staticText.title}</span></p>
                    <p className = {`${variables.home_description} scroll_animation`}>{staticText.description}</p>
                    <p className = "scroll_animation">{staticText.description}</p>

                </div>
                <ButtonScroll{...ButtonProps}/>
        </section>
    )
}