import variables from '../../assets/scss/Navbar.module.scss';

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
            <ul className={variables.navbar_list}>
                {links.map((link) => (
                    <li className={variables.navbar_item} key = {link.href}>
                        <a className= {`${variables.navbar_link} ${variables.navbar_item_selected}`} href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
    </nav>
    )
}