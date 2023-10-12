import {Link} from "react-router-dom";
import Logo from '@/components/logo/Logo';
import Nav from '@/components/navigation/Nav';
import s from './Header.module.scss'
import HeartIcon from "@/assets/svg/header/HeartIcon";
import AlertIcon from "@/assets/svg/header/AlertIcon";
import CartIcon from "@/assets/svg/header/CartIcon";
import SearchIcon from "@/assets/svg/header/SearchIcon";
import React from "react";

const navigationLinks = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'Shop', href: '/shop'},
    {id: 3, title: 'About', href: '/blog'},
    {id: 4, title: 'Contact', href: '/contacts'},
]

const userMenuLinks = [
    {id: 1, icon: <AlertIcon/>, href: '#'},
    {id: 2, icon: <SearchIcon/>, href: '#'},
    {id: 3, icon: <HeartIcon/>, href: '#'},
    {id: 4, icon: <CartIcon/>, href: '/cart'},
]

const UserMenu = () => {
    return <>
        {userMenuLinks.map(link =>
            <li key={link.id}>
                <Link to={link.href} className={s.svg}>
                    {link.icon}
                </Link>
            </li>
        )}
    </>
}

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.logo}>
                <Logo/>
            </div>
            <ul className={s.nav}>
                <Nav links={navigationLinks}/>
            </ul>
            <ul className={s.userMenu}>
                <UserMenu/>
            </ul>
        </header>
    );
};

export default Header;