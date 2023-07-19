import React from 'react';
import grifo from '../../assets/furniture/grifo.png';
import liviosa from '../../assets/furniture/leviosa.png';
import lolito from '../../assets/furniture/lolito.png';
import muggo from '../../assets/furniture/muggo.png';
import pingky from '../../assets/furniture/pingky.png';
import potty from '../../assets/furniture/potty.png';
import respira from '../../assets/furniture/respira.png';
import syltherine from '../../assets/furniture/syltherine.png';
import s from './OurProducts.module.scss';
import LikeIcon from '../../assets/svg/LikeIcon.tsx';
import ShareIcon from '../../assets/svg/ShareIcon.tsx';
import CompareIcon from '../../assets/svg/CompareIcon.tsx';
import {Link} from "react-router-dom";


const width = '285px';
const height = '301px'

export type ProductType = {
    id: number
    src: string
    alt: string
    title: string
    description: string
    price: string
    oldPrice: string
    status: string
}

export const products: ProductType[] = [
    {
        id: 1,
        src: syltherine,
        alt: 'syltherine',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: '2.500.000',
        oldPrice: '3.500.000',
        status: '-30%'
    },
    {
        id: 2,
        src: liviosa,
        alt: 'liviosa',
        title: 'Liviosa',
        description: 'Stylish cafe chair',
        price: '2.500.000',
        oldPrice: '',
        status: ''
    },
    {
        id: 3,
        src: lolito,
        alt: 'lolito',
        title: 'Lolito',
        description: 'Luxury big sofa',
        price: '7.000.000',
        oldPrice: '14.000.000',
        status: '-50%'
    },
    {
        id: 4,
        src: respira,
        alt: 'respira',
        title: 'Respira',
        description: 'Outdoor bar table and stool',
        price: '500.000',
        oldPrice: '',
        status: ''
    },
    {
        id: 5,
        src: grifo,
        alt: 'grifo',
        title: 'Grifo',
        description: 'Night lamp',
        price: '1.500.000',
        oldPrice: '',
        status: ''
    },
    {
        id: 6,
        src: muggo,
        alt: 'muggo',
        title: 'Muggo',
        description: 'Small mug',
        price: '150.000',
        oldPrice: '',
        status: 'New'
    },
    {
        id: 7,
        src: pingky,
        alt: 'pingky',
        title: 'Pingky',
        description: 'Cute bed set',
        price: '7.000.000',
        oldPrice: '14.000.000',
        status: '-50%'
    },
    {
        id: 8,
        src: potty,
        alt: 'potty',
        title: 'Potty',
        description: 'Minimalist flower pot',
        price: '1.500.000',
        oldPrice: '',
        status: 'New'
    },
]

const links = [
    {id: 1, src: <ShareIcon/>, href: '#'},
    {id: 3, src: <CompareIcon/>, href: '#'},
    {id: 2, src: <LikeIcon/>, href: '#'},
]

const linksList = links.map(link => {
        return (
            <Link className={s.overlaySvg} key={link.id} to={link.href}>
                {link.src}
            </Link>
        )
    }
)

export const Product = () => {
    return (
        products.map(product => {
                const productStatus = product.status === 'New' ? s.cardBadgeNew : s.cardBadgeDiscont
                return (
                    <Link to={'/products/' + product.id}>
                        <article className={s.card}>
                            <div className={s.overlay}>
                                <button className={s.overlayButton}>
                                    Add to cart
                                </button>
                                <div className={s.overlayLinkList}>
                                    {linksList}
                                </div>
                            </div>
                            <img
                                className={s.cardImg}
                                src={product.src}
                                alt={product.alt}
                                width={width}
                                height={height}
                            />
                            <span className={product.status && s.cardBadge + ' ' + productStatus}>
                            {product.status}
                            </span>
                            <div className={s.cardHeader}>
                                <h4 className={s.cardTitle}>{product.title}</h4>
                                <p className={s.cardDescription}>
                                    {product.description}
                                </p>
                                <div className={s.cardPrice}>
                                    <p className={s.cardCurrentPrice}>{`Rp ${product.price}`}</p>
                                    {product.oldPrice && <p className={s.cardOldPrice}>{`Rp ${product.oldPrice}`}</p>}
                                </div>
                            </div>
                        </article>
                    </Link>
                )

            }
        )
    )
}

export const OurProducts = () => {
    return (
        <section className={s.wrapper}>
            <h3 className={s.title}>
                Our Products
            </h3>
            <div className={s.cards}>
                <Product/>
            </div>
            <button className={s.button}>
                Show More
            </button>
        </section>
    );
};