import {Link, useLocation} from 'react-router-dom';
import s from './Breadcrumbs.module.scss';
import rightArrow from '@/assets/svg/right_arrow.svg';
import verticalLine from '@/assets/svg/vertical-line.svg';
import logoIcon from '@/assets/svg/logo-icon.svg';
import React from 'react';

const Breadcrumbs = ({productTitle, pageTitle}: {productTitle?: string, pageTitle?: boolean}) => {
    const location = useLocation();
    const resultPath = location.pathname.slice(1, -2) === 'products' ? 'shop' : location.pathname.slice(1);
    let resultPathToUpperCase;
    if (resultPath) {
        resultPathToUpperCase =  resultPath[0].toUpperCase() + resultPath.slice(1)
    }

    return (
        <nav className={pageTitle ? s.breadcrumb_logo : s.breadcrumb}>
            {pageTitle &&
                <>
                    <img src={logoIcon} alt="logo-icon" width='50px' height='33px'/>
                    <h2>{resultPathToUpperCase}</h2>
                </>

            }
            <ul className={s.breadcrumb__list}>
                <Link to={'/'}>
                    <li className={s.breadcrumb__item}>
                        {'Home'}
                    </li>
                </Link>
                <img src={rightArrow} className={s.breadcrumb__arrow} alt='right-arrow'/>
                <Link to={'/shop'}>
                    <li className={s.breadcrumb__item}>
                        {resultPathToUpperCase}
                    </li>
                </Link>
                {productTitle &&
                    <>
                        <img src={rightArrow} className={s.breadcrumb__arrow} alt='right-arrow'/>
                        <img src={verticalLine} alt='vertical-line'/>
                        <div className={s.breadcrumb__title}>
                            {productTitle}
                        </div>
                    </>
                }
            </ul>
        </nav>

    );
};

export default Breadcrumbs;