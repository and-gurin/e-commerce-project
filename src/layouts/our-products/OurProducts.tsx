import s from './OurProducts.module.scss';
import LikeIcon from '@/assets/svg/LikeIcon.tsx';
import ShareIcon from '@/assets/svg/ShareIcon.tsx';
import CompareIcon from '@/assets/svg/CompareIcon.tsx';
import {Link} from 'react-router-dom';
import {products} from '@/state/store';
import {useState} from "react";
import ReactPaginate from "react-paginate";

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

export const productList = products.map(product => {
        const productStatus = product.status === 'New' ? s.cardBadgeNew : s.cardBadgeDiscont
        return (
            <>
                <Link to={'/products/' + product.id} key={product.id}>
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
            </>
        )
    }
)

export const OurProducts = ({title, pagination, amount, onClick}:
                                {
                                    title?: string,
                                    pagination?: boolean,
                                    amount?: number
                                    onClick?: () => void
                                }) => {

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 16;
    const offset = currentPage * itemsPerPage;
    const pageCount = Math.ceil(productList.length / itemsPerPage);


    const currentPageData = amount ?
        productList.slice(0, amount) :
        productList.slice(offset, offset + itemsPerPage);

    const handlePageClick = ({selected: selectedPage}) => {
        setCurrentPage(selectedPage);
        console.log(selectedPage)
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