import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import s from './SingleProduct.module.scss';
import rightArrow from '../../assets/svg/right_arrow.svg';
import verticalLine from '../../assets/svg/vertical-line.svg';
import {products, ProductType} from '../our-products/OurProducts';
import syltherine from '../../assets/furniture/syltherine.png';
import firstThumb from '../../assets/product-photo/Outdoor sofa set 2.png'
import secondThumb from '../../assets/product-photo/Outdoor sofa set_2 1.png'
import thirdThumb from '../../assets/product-photo/Stuart sofa 1.png'
import fourthThumb from '../../assets/product-photo/Maya sofa three seater (1) 1.png'
import firstPhoto from '../../assets/product-photo/Asgaard sofa 3.png'
import secondPhoto from '../../assets/product-photo/image 76.png'
import thirdPhoto from '../../assets/product-photo/image 82.png'
import fourthPhoto from '../../assets/product-photo/image 99.png'
import {Rating} from '@mui/material';
import {Star} from '@mui/icons-material'
import Radio from '../../components/radio/Radio';
import InputPlusMinus from '../../components/input-plus-minus/InputPlusMinus';

const breadcrumbLinks = [
    {title: 'Home', href: ''},
    {title: 'Shop', href: ''}
]

const productThumbnail = [
        {
            src: firstThumb,
            name: 'first'
        },
        {
            src: secondThumb,
            name: 'second'
        },
        {
            src: thirdThumb,
            name: 'third'
        },
        {
            src: fourthThumb,
            name: 'fourth'
        }
]

const productPhoto = [
    {
        src: firstPhoto,
        name: 'first'
    },
    {
        src: secondPhoto,
        name: 'second'
    },
    {
        src: thirdPhoto,
        name: 'third'
    },
    {
        src: fourthPhoto,
        name: 'fourth'
    }
]

const productAdditionInfo = {
    size: [
        {value: '', id: 'lSize', title: 'L'},
        {value: '', id: 'xlSize', title: 'XL'},
        {value: '', id: 'xsSize', title: 'XS'}
    ],
    color: [
        {value: '#816DFA', id: 'blueColor', title: ''},
        {value: '#000000', id: 'blackColor', title: ''},
        {value: '#B88E2F', id: 'goldColor', title: ''}
    ]
}

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

const SingleProduct = () => {

    const params = useParams();
    const productId = +params.id;

    const [product, setProduct] = useState<ProductType>({
        id: 1,
        src: syltherine,
        alt: 'syltherine',
        title: 'Syltherine',
        description: 'Stylish cafe chair',
        price: '2.500.000',
        oldPrice: '3.500.000',
        status: '-30%'
    });
    const [photo, setPhoto] = useState<string>(productPhoto[0].src)
    const [ratingValue, setRatingValue] = useState<number>(4.5)
    const [sizeValue, setSizeValue] = useState('')
    const [colorValue, setColorValue] = useState('')
    const [countValue, setCountValue] = useState(1)

    const singleProduct: ProductType = products.find(prod => prod.id === productId);

    useEffect(() => {
        if (singleProduct) {
            setProduct(singleProduct)
        }
    }, [singleProduct])


    return (
        <section>
            <ul className={s.linkList}>
                {breadcrumbs}
                <img src={verticalLine} alt='vertical-line'/>
                <div className={s.linkTitle}>
                    {product.title}
                </div>
            </ul>
            <article className={s.product}>
                <div className={s.productImages}>
                    <ul className={s.productThumbnails}>
                        {productThumbnail.map((thumb, index) => {
                                const onClickThumbnailHandler = () => {
                                    const currentPhoto = productPhoto.find(photo => photo.name === thumb.name);
                                    if (currentPhoto) {
                                        setPhoto(currentPhoto.src)
                                    }
                                }
                                return (
                                    <li key={index} className={s.productThumbnail}
                                        onClick={onClickThumbnailHandler}>
                                        <img src={thumb.src} width='76px' height='80px' alt="thumbnail"/>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <div className={s.productPhoto}>
                        <img src={photo} width='423' height='391' alt="productPhoto"/>
                    </div>
                </div>
                <div className={s.productDetails}>
                    <p className={s.productTitle}>
                        {product.title}
                    </p>
                    <p className={s.productPrice}>
                        {`Rs ${product.price}`}
                    </p>
                    <div className={s.productRating}>
                        <Rating name='half-rating'
                                sx={{ fontSize: '20px', marginRight: '18px' }}
                                emptyIcon={<Star fontSize="inherit" sx={{ color: 'white' }}/>}
                                value={ratingValue}
                                onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                }}
                                precision={0.5}/>
                        <svg width="2" height="37" style={{ marginRight: '22px' }} viewBox="0 0 2 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="1"/>
                        </svg>
                        <Link className={s.productSize} to='#'>
                            5 Customer Review
                        </Link>
                    </div>
                    <p className={s.productDescription}>
                        Setting the bar as one of the loudest speakers in its class,
                        the Kilburn is a compact, stout-hearted hero with a
                        well-balanced audio which boasts a clear midrange
                        and extended highs for a sound.
                    </p>
                    <p className={s.productSize}>
                        Size
                    </p>
                    <div className={s.productRadio}>
                        <Radio
                            options={productAdditionInfo.size}
                            value={sizeValue}
                            onChange={(e) => setSizeValue(e.currentTarget.value)}
                        />
                    </div>
                    <p className={s.productSize}>
                        Color
                    </p>
                    <div className={s.productRadio}>
                        <Radio
                               options={productAdditionInfo.color}
                               value={colorValue}
                               onChange={(e) => setColorValue(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className={s.productButtons}>
                    <InputPlusMinus
                        value={countValue}
                        onClickPlus={() => setCountValue(countValue + 1)}
                        onClickMinus={() => setCountValue(countValue - 1)}
                    />
                </div>
            </article>
        </section>
    );
};

export default SingleProduct;