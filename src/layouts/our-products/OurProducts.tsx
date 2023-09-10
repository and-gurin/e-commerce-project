import s from './OurProducts.module.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import ReactPaginate from "react-paginate";
import React from 'react';
import {ProductType} from '@/features/product/productSlice';
import LikeIcon from '@/assets/svg/LikeIcon';
import ShareIcon from '@/assets/svg/ShareIcon';
import CompareIcon from '@/assets/svg/CompareIcon';
import {useAppDispatch, useAppSelector} from "@/hooks/useAppDispatch";
import {addToCart} from "@/features/cart/cartSlice";
import {addToComparison} from "@/features/conparison/comparisonSlice";

const width = '285px';
const height = '301px'

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
            return a.title.localeCompare(b.title);
        }
        if (sortBy === 'price') {
            return a.price - b.price;
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
            const links = [
                {id: 1, src: <ShareIcon/>, href: '#', onClick: () => {}},
                {id: 3, src: <CompareIcon/>, href: `/comparison/${product.id}`, onClick: () => {dispatch(addToComparison({product: product}))}},
                {id: 2, src: <LikeIcon/>, href: '#', onClick: () => {}},
            ]
            return (
                <Link to={'/products/' + product.id} key={product.id}>
                    <article className={s.card}>
                        <div className={s.overlay}>
                            <button className={s.overlayButton} onClick={onClickAddToCart}>
                                Add to cart
                            </button>
                            <div className={s.overlayLinkList}>
                                {links.map(link => {
                                        return (
                                            <Link className={s.overlaySvg} key={link.id} to={link.href} onClick={link.onClick}>
                                                {link.src}
                                            </Link>
                                        )
                                    }
                                )}
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
                                <p className={s.cardCurrentPrice}>{`Rp ${product.price.toLocaleString('de-DE')}`}</p>
                                {product.oldPrice &&
                                    <p className={s.cardOldPrice}>{`Rp ${product.oldPrice.toLocaleString('de-DE')}`}</p>}
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