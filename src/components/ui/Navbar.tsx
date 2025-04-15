import variables from '../../assets/scss/Navbar.module.scss';
import {Link} from 'react-scroll';

interface NavbarProps {
    links: {
        href: string;
        label: string;
    }[];
}


export function Navbar({ links } : NavbarProps) { 
    return (
        <nav className={variables.navbar_container}> {/*Nav Children Check*/} 
            <h1 className={variables.navbar_title}>Norbi</h1>
            <ul className={`${variables.navbar_list} teszt`}>
                {links.map((link) => (
                    <li className={variables.navbar_item} key = {link.href}>
                        <Link to={link.href} spy={true} smooth={true} offset={0} duration={500} className={variables.navbar_link}>{link.label}</Link>
                    </li>
                    
                ))}
            </ul>
        </nav>
    )
}