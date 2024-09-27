import variables from '../assets/scss/Button.module.scss';
import {Link} from 'react-scroll';


interface ButtonProps{
    content : string,
    href : string 
}

{/*Szétszedni a gombokat*/}
export function ButtonScroll({content, href}:ButtonProps){
    return (
        <Link to={href} spy={true} smooth={true} offset={0} duration={500} className={variables.button}>{content}</Link>
    )
}