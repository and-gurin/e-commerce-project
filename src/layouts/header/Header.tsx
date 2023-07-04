import React from 'react';
import alert from '../../assets/svg/header/mdi_account-alert-outline.svg'
import search from '../../assets/svg/header/akar-icons_search.svg'
import favourite from '../../assets/svg/header/akar-icons_heart.svg'
import cart from '../../assets/svg/header/ant-design_shopping-cart-outlined.svg'
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import Navigation from '../../components/navigation/Navigation';
import s from './Header.module.scss'

const links = [
    {id: 1, src: alert, alt: 'alert', size: '28px', href: '#'},
    {id: 2, src: search, alt: 'search', size: '28px', href: '#'},
    {id: 3, src: favourite, alt: 'favourite', size: '28px', href: '#'},
    {id: 4, src: cart, alt: 'cart', size: '28px', href: '#'},
]

const UserMenu = () => {
    return (
        links.map(link =>
            <li key={link.id}>
                <Link to={link.href}>
                    <img src={link.src} alt={link.alt} width={link.size} height={link.size}/>
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