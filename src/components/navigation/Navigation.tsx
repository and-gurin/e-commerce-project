import React from 'react';
import s from './Navigation.module.scss'
import {Link} from "react-router-dom";

const Navigation = ({links}) => {
    return (
        links.map(link =>
            <li key={link.id}>
                <Link className={s.link} to={link.href}>
                    {link.title}
                </Link>
            </li>
        )
    );
};

export default Navigation;