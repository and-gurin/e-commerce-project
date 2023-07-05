import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import Navigation from '../../components/navigation/Navigation';
import s from './Header.module.scss'
import HeartIcon from "../../assets/svg/header/HeartIcon.tsx";
import AlertIcon from "../../assets/svg/header/AlertIcon.tsx";
import CartIcon from "../../assets/svg/header/CartIcon.tsx";
import SearchIcon from "../../assets/svg/header/SearchIcon.tsx";



const UserMenu = () => {
    const links = [
        {id: 1, src: <AlertIcon/>, alt: 'alert', size: '28px', href: '#'},
        {id: 2, src: <SearchIcon/>, alt: 'search', size: '28px', href: '#'},
        {id: 3, src: <HeartIcon/>, alt: 'favourite', size: '28px', href: '#'},
        {id: 4, src: <CartIcon/>, alt: 'cart', size: '28px', href: '#'},
    ]
    return (
        links.map(link =>
            <li key={link.id}>
                <Link to={link.href} className={s.svg}>
                    {link.src}
                </Link>
            </li>
        )
    )
}

const Header = () => {
    return (
        <header className={s.wrapper}>
            <div className={s.logo}>
                <Logo/>
            </div>
            <ul className={s.nav}>
                <Navigation/>
            </ul>
            <ul className={s.userMenu}>
                <UserMenu/>
            </ul>
        </header>
    );
};

export default Header;