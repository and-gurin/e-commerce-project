import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import Navigation from '../../components/navigation/Nav';
import s from './Header.module.scss'
import HeartIcon from "../../assets/svg/header/HeartIcon.tsx";
import AlertIcon from "../../assets/svg/header/AlertIcon.tsx";
import CartIcon from "../../assets/svg/header/CartIcon.tsx";
import SearchIcon from "../../assets/svg/header/SearchIcon.tsx";

const links = [
    {id: 1, title: 'Home', href: '/'},
    {id: 2, title: 'Shop', href: '/about'},
    {id: 3, title: 'About', href: '/links'},
    {id: 4, title: 'Contact', href: '/'},
]

const UserMenu = () => {
    const links = [
        {id: 1, src: <AlertIcon/>, href: '#'},
        {id: 2, src: <SearchIcon/>, href: '#'},
        {id: 3, src: <HeartIcon/>, href: '#'},
        {id: 4, src: <CartIcon/>, href: '#'},
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
                <Navigation links={links}/>
            </ul>
            <ul className={s.userMenu}>
                <UserMenu/>
            </ul>
        </header>
    );
};

export default Header;