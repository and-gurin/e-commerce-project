import React from 'react';
import {Link, useParams} from 'react-router-dom';
import s from './SingleProduct.module.scss'
import rightArrow from '../../assets/svg/right_arrow.svg'
import verticalLine from '../../assets/svg/vertical-line.svg'

const links = [
    {title: 'Home', href: ''},
    {title: 'Shop', href: ''}
]

const SingleProduct = () => {
    const params = useParams();
    const postId = params.id;
    return (
        <section>
            <ul>
                {links.map((link, index) =>
                    <>
                        <Link key={index} to={link.href}>
                            <li className={s.link}>
                                {link.title}
                            </li>
                        </Link>
                        <span>
                            {rightArrow}
                        </span>
                    </>
                )}
                <span>
                    {verticalLine}
                </span>
            </ul>
        </section>
    );
};

export default SingleProduct;