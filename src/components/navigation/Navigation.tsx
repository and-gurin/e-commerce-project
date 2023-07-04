import React from 'react';
import s from './Navigation.module.scss'
import {Link} from "react-router-dom";

const links = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'Shop', href: '/about'},
    {id: 3, title: 'About', href: '/links'},
    {id: 4, title: 'Contact', href: '/'},
]

const Navigation = () => {
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