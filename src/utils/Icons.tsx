import variables from '../assets/scss/Icons.module.scss';
import * as siIconLibrary from "react-icons/si";
import { IconContext } from "react-icons";
import React from "react";

interface IconProps{
    iconName : string,
    href : string 
}


export function Icons({ iconName }: IconProps) {
    const IconComponent = (siIconLibrary as { [key: string]: React.ElementType })[iconName];
    if (!IconComponent) {
        console.warn(`Icons: icon "${iconName}" not found in react-icons/si`);
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