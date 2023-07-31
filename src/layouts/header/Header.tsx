import {Link} from "react-router-dom";
import Logo from '@/components/logo/Logo';
import Navigation from '@/components/navigation/Nav';
import s from './Header.module.scss'
import HeartIcon from "@/assets/svg/header/HeartIcon.tsx";
import AlertIcon from "@/assets/svg/header/AlertIcon.tsx";
import CartIcon from "@/assets/svg/header/CartIcon.tsx";
import SearchIcon from "@/assets/svg/header/SearchIcon.tsx";

const navigationLinks = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'Shop', href: '/about'},
    {id: 3, title: 'About', href: '/links'},
    {id: 4, title: 'Contact', href: '/'},
]

const userMenuLinks = [
    {id: 1, icon: <AlertIcon/>, href: '#'},
    {id: 2, icon: <SearchIcon/>, href: '#'},
    {id: 3, icon: <HeartIcon/>, href: '#'},
    {id: 4, icon: <CartIcon/>, href: '#'},
]

const UserMenu = () => {
    return (
        userMenuLinks.map(link =>
            <li key={link.id}>
                <Link to={link.href} className={s.svg}>
                    {link.icon}
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
                <Navigation links={navigationLinks}/>
            </ul>
            <ul className={s.userMenu}>
                <UserMenu/>
            </ul>
        </header>
    );
};

export default Header;