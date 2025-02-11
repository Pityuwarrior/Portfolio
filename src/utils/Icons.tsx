import variables from '../assets/scss/Icons.module.scss';
import * as iconLibrary from "react-icons/bs";
import React from "react";

interface IconProps{
    iconName : string,
    href : string 
}

{/*Szétszedni a gombokat*/}
export function Icons({iconName, href}:IconProps){
    return (
            <li className={variables.icons_item} key = {href}>
                <a href={href} target='_blank' className={variables.icon}>
                    {React.createElement((iconLibrary as { [key: string]: React.ElementType })[iconName], {})}
                </a>
            </li>
    )
}