import {Link} from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import rightArrow from '../../assets/svg/right_arrow.svg';
import verticalLine from '../../assets/svg/vertical-line.svg';

const breadcrumbLinks = [
    {title: 'Home', href: ''},
    {title: 'Shop', href: ''}
]

const breadcrumbs = breadcrumbLinks.map((link, index) =>
    <>
        <Link key={index} to={link.href}>
            <li className={s.link}>
                {link.title}
            </li>
        </Link>
        <img src={rightArrow} className={s.linkArrow} alt='right-arrow'/>
    </>
)

const Breadcrumbs = ({title}: {title: string}) => {
    return (
        <ul className={s.linkList}>
            {breadcrumbs}
            <img src={verticalLine} alt='vertical-line'/>
            <div className={s.linkTitle}>
                {title}
            </div>
        </ul>
    );
};

export default Breadcrumbs;