import React from 'react';
import s from './Comparison.module.scss'
import {useAppDispatch, useAppSelector} from "@/hooks/useAppDispatch";
import {Link} from 'react-router-dom';
import {Rating} from '@mui/material';
import {Star} from '@mui/icons-material';
import {changeRating} from '@/features/product/productSlice';
import CartButton from '@/components/cartButton/CartButton';
import arrow from '@/assets/svg/arrow-down.svg'
import {addToCart} from '@/features/cart/cartSlice';

type propertyNamesType = 'general' | 'product' | 'dimensions'| 'warranty';

const Comparison = ({setIsOpen}: { setIsOpen: (isOpen: boolean) => void }) => {

    const productInComparison = useAppSelector(state => state.comparison);
    const dispatch = useAppDispatch();


    const productsFeatures = (categoryName: propertyNamesType) => {
        let result: any[] = [];
        const productKeys = productInComparison.length > 0 ?
             Object.keys(productInComparison[0][categoryName]).map(key => key.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')) : ''
        const firstProductValues = productInComparison.length > 0 ? Object.values(productInComparison[0][categoryName]) : '';
        const secondProductValues = productInComparison.length > 1 ? Object.values(productInComparison[1][categoryName]) : '';
        for (let i = 0; i < productKeys?.length; i++) {
            result.push([])
            result[i].push(productKeys[i]);
            result[i].push(firstProductValues[i]);
            result[i].push(secondProductValues[i])
        }
        return result
    };

    const propertyNames: Array<propertyNamesType> = ['general', 'product', 'dimensions', 'warranty'];

    const onClickAddToCart = (productNumber: number) => {
        dispatch(addToCart({product: productInComparison[productNumber], quantity: 1}))
        setIsOpen(true)
    }

    return (
        <section className={s.comparison}>
            <div className={s.wrapper}>
                <header className={s.header}>
                    <div className={s.header__goToProduct}>
                        <Link to={'/shop'} className={s.header__title_goToProduct}>
                            Go to Product page for more Products
                        </Link>
                        <Link to={'/shop'} className={s.header__subtitle}>
                            View More
                        </Link>
                    </div>
                    {productInComparison.map(product => {
                        return (
                            <div className={s.header__products} key={product.id}>
                                <Link to={'/products/' + product.id}>
                                    <div className={s.header__figure}>
                                        <img src={product.src} className={s.header__img} width='239px' height='177px'
                                             alt={product.alt}/>
                                    </div>
                                </Link>
                                <p className={s.header__title_products}>{product.title}</p>
                                <p className={s.header__price}>{`Rs.${product.price.toLocaleString('en-US')}`}</p>
                                <div className={s.header__rating}>
                                    <span style={{marginRight: '4px'}}>{product.rating}</span>
                                    <Rating name='half-rating'
                                            sx={{fontSize: '20px', marginRight: '6px'}}
                                            emptyIcon={<Star fontSize="inherit" sx={{color: 'white'}}/>}
                                            value={product.rating}
                                            onChange={(_event, newValue) => {
                                                dispatch(changeRating({id: product.id, ratingValue: newValue}))
                                            }}
                                            precision={0.5}/>
                                    <svg width="2" height="37" style={{marginRight: '9px'}} viewBox="0 0 2 37" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <line x1="1" x2="1" y2="37" stroke="#9F9F9F" strokeWidth="1"/>
                                    </svg>
                                    <Link className={s.header__review} to='#'>
                                        5 Review
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                    <div className={s.header__addAProduct}>
                        <Link to={'/shop'} className={s.header__title_addAProduct}>
                            Add A Product
                        </Link>
                        <CartButton title='Choose a Product'
                                    width='224px'
                                    height='39px'
                                    borderRadius='6px'
                                    bg={'#B88E2F'}
                                    link={'/shop'}
                                    fontSize={'14px'}
                                    fontWeight={'600'}
                                    color={'#FFFFFF'}
                                    border={'none'}
                                    icon={arrow}
                        />
                    </div>
                </header>
                <main>
                    <table className={s.table}>
                        <tbody className={s.table__body}>
                        {propertyNames.map(name => {
                            return (
                                <>
                                    <tr className={s.table__titleString}>
                                        <td className={s.table__title}>{name.split(" ")
                                            .map(word=> word.charAt(0).toUpperCase() + word.slice(1))}</td>
                                        <td className={s.table__title}>&nbsp;</td>
                                        <td className={s.table__title}>&nbsp;</td>
                                        <td className={s.table__title_last}>&nbsp;</td>
                                    </tr>
                                    {productsFeatures(name)?.map(feature => {
                                        return (
                                            <tr key={feature[0]} className={s.table__section}>
                                                <td className={s.table__heading}>{feature[0]}</td>
                                                <td className={s.table__content}>{feature[1]}</td>
                                                <td className={s.table__content}>{feature[2]}</td>
                                                <td className={s.table__content}>{''}</td>
                                            </tr>
                                        )
                                    })}
                                </>
                            )
                        })}
                        <tr>
                            <td className={s.table__title}>&nbsp;</td>
                            <td className={s.table__button}>
                                <CartButton title='Add to cart'
                                            width='215px'
                                            height='64px'
                                            bg={'#B88E2F'}
                                            borderRadius={'0'}
                                            link={'#'}
                                            fontSize={'20px'}
                                            fontWeight={'400'}
                                            color={'#FFFFFF'}
                                            border={'none'}
                                            onClick={() => onClickAddToCart(0)}
                                />
                            </td>
                            <td className={s.table__button}>
                                <CartButton title='Add to cart'
                                            width='215px'
                                            height='64px'
                                            bg={'#B88E2F'}
                                            borderRadius={'0'}
                                            link={'#'}
                                            fontSize={'20px'}
                                            fontWeight={'400'}
                                            color={'#FFFFFF'}
                                            border={'none'}
                                            onClick={() => onClickAddToCart(1)}
                                />
                            </td>
                            <td className={s.table__title_last}>&nbsp;</td>
                        </tr>
                        </tbody>
                    </table>
                </main>
            </div>
        </section>
    );
};

export default Comparison;