import s from './OurProducts.module.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import ReactPaginate from "react-paginate";
import React from 'react';
import {ProductType} from '@/features/product/productSlice';
import LikeIcon from '@/assets/svg/LikeIcon';
import ShareIcon from '@/assets/svg/ShareIcon';
import CompareIcon from '@/assets/svg/CompareIcon';
import {productPrice} from '@/layouts/cart/Cart';
import {useAppDispatch, useAppSelector} from "@/hooks/useAppDispatch";
import {addToCart} from "@/features/cart/cartSlice";

const width = '285px';
const height = '301px'

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

export const OurProducts = ({title, pagination, amount, onClick, itemsPerPage, sort, setIsOpen}:
                                {
                                    title?: string,
                                    pagination?: boolean,
                                    amount?: number
                                    onClick?: () => void
                                    itemsPerPage: number
                                    sort: string | null
                                    setIsOpen: (isOpen: boolean) => void
                                }) => {

    const products = useAppSelector(state => state.product);
    const dispatch = useAppDispatch()

    //sort
    const sortProduct = (a: ProductType, b: ProductType, sortBy: string | null) => {
        if (sortBy === 'name') {
            return a.title < b.title ? 1 : -1;
        }
        if (sortBy === 'price') {
            return parseInt(a.price) - parseInt(b.price);
        }
    };

    const productListSorted = sort === 'default' ? products :
        [...products].sort((a, b) => sortProduct(a, b, sort) as number);

    const productList = productListSorted.map(product => {
            const productStatus = product.status === 'New' ? s.cardBadgeNew : s.cardBadgeDiscont;
        const onClickAddToCart = () => {
            dispatch(addToCart({product: product, quantity: 1}))
            setIsOpen(true)
        }
            return (
                <Link to={'/products/' + product.id} key={product.id}>
                    <article className={s.card}>
                        <div className={s.overlay}>
                            <button className={s.overlayButton} onClick={onClickAddToCart}>
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
                                <p className={s.cardCurrentPrice}>{`Rp ${productPrice(product.price)}`}</p>
                                {product.oldPrice && <p className={s.cardOldPrice}>{`Rp ${product.oldPrice}`}</p>}
                            </div>
                        </div>
                    </article>
                </Link>
            )
        }
    )

//pagination
    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(productList.length / itemsPerPage);

    const currentPageData = amount ?
        productList.slice(0, amount) :
        productList.slice(offset, offset + itemsPerPage);

    // @ts-ignore
    const handlePageClick = (e) => {
        setCurrentPage(e.selected);
    };

    return (
        <section className={s.wrapper}>
            {title &&
                <h3 className={s.title}>
                    {title}
                </h3>
            }

            <div>
                <div className={s.cards}>
                    {currentPageData}
                </div>
                {pagination ?
                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={s.pagination}
                        pageLinkClassName={s.paginationLinks}
                        nextLinkClassName={s.paginationNext}
                        activeLinkClassName={s.paginationActive}
                        disabledLinkClassName={s.paginationDisable}
                    />
                    :
                    <button onClick={onClick} className={s.button}>
                        Show More
                    </button>}
            </div>
        </section>
    );
};