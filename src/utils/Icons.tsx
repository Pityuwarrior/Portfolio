import variables from '../assets/scss/Icons.module.scss';
import * as bsIconLibrary from "react-icons/bs";
import * as siIconLibrary from "react-icons/si";
import { IconContext } from "react-icons";
import React from "react";

interface IconProps{
    iconName : string
}

{/*Szétszedni a gombokat*/}
export function BsIcons({ iconName }: IconProps) {
    const IconComponent = (bsIconLibrary as { [key: string]: React.ElementType })[iconName];
    if (!IconComponent) {
        console.warn(`BsIcons: icon "${iconName}" not found in react-icons/bs`);
        return null;
    }
    return (
        <li className={variables.icons_item}>
            <IconContext.Provider value={{ className: variables.icon }}>
                <IconComponent />
            </IconContext.Provider>
        </li>
    );
}

export function SiIcons({ iconName }: IconProps) {
    const IconComponent = (siIconLibrary as { [key: string]: React.ElementType })[iconName];
    if (!IconComponent) {
        console.warn(`SiIcons: icon "${iconName}" not found in react-icons/si`);
        return null;
    }
    return (
        <li className={variables.icons_item}>
            <IconContext.Provider value={{ className: variables.icon }}>
                <IconComponent />
            </IconContext.Provider>
        </li>
    );
}