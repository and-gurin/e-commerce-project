import s from './Nav.module.scss'
import {Link} from "react-router-dom";
import React from 'react';

type LinkPropsType = {id: number, title: string, href: string}

const Nav = ({links}: { links: LinkPropsType[] }) => {
    return <>
        {links.map((link: LinkPropsType) =>
            <li key={link.id}>
                <Link className={s.link} to={link.href}>
                    {link.title}
                </Link>
            </li>
        )}
    </>



};

export default Nav;