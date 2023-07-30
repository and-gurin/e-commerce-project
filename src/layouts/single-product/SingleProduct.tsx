import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import s from './SingleProduct.module.scss';
import {products, ProductType} from '../our-products/OurProducts';
import syltherine from '@/assets/furniture/syltherine.png';
import firstThumb from '@/assets/product-photo/Outdoor sofa set 2.png'
import secondThumb from '@/assets/product-photo/Outdoor sofa set_2 1.png'
import thirdThumb from '@/assets/product-photo/Stuart sofa 1.png'
import fourthThumb from '@/assets/product-photo/Maya sofa three seater (1) 1.png'
import firstPhoto from '@/assets/product-photo/Asgaard sofa 3.png'
import secondPhoto from '@/assets/product-photo/image 76.png'
import thirdPhoto from '@/assets/product-photo/image 82.png'
import fourthPhoto from '@/assets/product-photo/image 99.png'
import facebook from '@/assets/svg/akar-icons_facebook-fill.svg'
import linkedin from '@/assets/svg/akar-icons_linkedin-box-fill.svg'
import twitter from '@/assets/svg/ant-design_twitter-circle-filled.svg'
import {Rating} from '@mui/material';
import {Star} from '@mui/icons-material'
import Radio from '@/components/radio/Radio';
import InputPlusMinus from '@/components/input-plus-minus/InputPlusMinus';
import CartButton from '@/components/cartButton/CartButton';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import ProductDescription from '../product-description/ProductDescription';

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

const productAddition = {
    size: [
        {value: '', id: 'lSize', title: 'L'},
        {value: '', id: 'xlSize', title: 'XL'},
        {value: '', id: 'xsSize', title: 'XS'}
    ],
    color: [
        {value: '#816DFA', id: 'blueColor', title: ''},
        {value: '#000000', id: 'blackColor', title: ''},
        {value: '#B88E2F', id: 'goldColor', title: ''}
    ],
    sku: 'SS001',
    category: 'Sofas',
    tags: [
        {title: 'Sofa, ', link: '#'},
        {title: 'Chair, ', link: '#'},
        {title: 'Home, ', link: '#'},
        {title: 'Shop', link: '#'},
    ],
    shares: [
        {src: facebook, link: '#'},
        {src: linkedin, link: '#'},
        {src: twitter, link: '#'}
    ],
    addition: [
        {
            value: [
                {paragraph: 'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and' +
                        ' sound of Marshall, unplugs the chords, and takes the show on the road.'},
                {paragraph: 'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest ' +
                        'speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange ' +
                        'and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls ' +
                        'to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'}
            ],
            id: 'description',
            title: 'Description'
        },
        {
            value: [
                {paragraph: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced ' +
                    'audio which boasts a clear midrange and extended highs for a sound.'},
                {paragraph: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced ' +
                        'audio which boasts a clear midrange and extended highs for a sound.'},
            ],
            id: 'additional',
            title: 'Additional Information'
        },
        {
            value: [
                {paragraph: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced ' +
                        'audio which boasts a clear midrange and extended highs for a sound.'},
                {paragraph: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced ' +
                        'audio which boasts a clear midrange and extended highs for a sound.'},
            ],
            id: 'reviews',
            title: 'Reviews [5]'
        }
    ],
}

const tags = productAddition.tags.map((tag, index) =>
    <Link key={index} to={tag.link}>
        <span className={s.technicalInfoValue}>{tag.title}</span>
    </Link>
)
const shares = productAddition.shares.map((share, index) =>
    <Link key={index} to={share.link}>
        <img src={share.src} width='20px' height='20px' alt='social-network-share'/>
    </Link>
)

const SingleProduct = () => {

    const params = useParams();
    const productId: number = +params.id;

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
    const [ratingValue, setRatingValue] = useState(4.5)
    const [sizeValue, setSizeValue] = useState('')
    const [colorValue, setColorValue] = useState('')
    const [countValue, setCountValue] = useState(1)
    const [descriptionValue, setDescriptionValue] = useState('description')

    const singleProduct: ProductType = products.find(prod => prod.id === productId);


    useEffect(() => {
        if (singleProduct) {
            setProduct(singleProduct)
        }
    }, [singleProduct])

    return (
        <>
            <section>
                <nav className={s.breadcrumbs}>
                    <Breadcrumbs title={product.title}/>
                </nav>
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
                                    sx={{fontSize: '20px', marginRight: '18px'}}
                                    emptyIcon={<Star fontSize="inherit" sx={{color: 'white'}}/>}
                                    value={ratingValue}
                                    onChange={(event, newValue) => {
                                        setRatingValue(newValue);
                                    }}
                                    precision={0.5}/>
                            <svg width="2" height="37" style={{marginRight: '22px'}} viewBox="0 0 2 37" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" x2="1" y2="37" stroke="#9F9F9F" stroke-width="1"/>
                            </svg>
                            <Link className={s.radioGroupSize} to='#'>
                                5 Customer Review
                            </Link>
                        </div>
                        <p className={s.productDescription}>
                            Setting the bar as one of the loudest speakers in its class,
                            the Kilburn is a compact, stout-hearted hero with a
                            well-balanced audio which boasts a clear midrange
                            and extended highs for a sound.
                        </p>
                        <div className={s.radioGroup}>
                            <p className={s.radioGroupSize}>
                                Size
                            </p>
                            <div className={s.radioGroupRadio}>
                                <Radio
                                    options={productAddition.size}
                                    value={sizeValue}
                                    onChange={(e) => setSizeValue(e.currentTarget.value)}
                                />
                            </div>
                            <p className={s.radioGroupSize}>
                                Color
                            </p>
                            <div className={s.radioGroupRadio}>
                                <Radio
                                    options={productAddition.color}
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
                            <CartButton title='Add To Cart'
                                        width='215px'
                                        height='64px'
                                        borderRadius='15px'
                                        bg={'transparent'}
                            />
                            <CartButton title='+&nbsp;&nbsp;Compare'
                                        width='215px'
                                        height='64px'
                                        borderRadius='15px'
                                        bg={'transparent'}
                            />
                        </div>
                        <aside className={s.technicalInfo}>
                            <div className={s.technicalInfoWrapper}>
                            <span className={s.technicalInfoKey}>
                                SKU
                            </span>
                                <span className={s.technicalInfoValue}>
                                <span>:&nbsp;&nbsp;</span>
                                    {productAddition.sku}
                            </span>
                            </div>
                            <div className={s.technicalInfoWrapper}>
                            <span className={s.technicalInfoKey}>
                                Category
                            </span>
                                <span className={s.technicalInfoValue}>
                                <span>:&nbsp;&nbsp;</span>
                                    {productAddition.category}
                            </span>
                            </div>
                            <div className={s.technicalInfoWrapper}>
                            <span className={s.technicalInfoKey}>
                                Tags
                            </span>
                                <span className={s.technicalInfoValue}>
                                <span>:&nbsp;&nbsp;</span>
                                    {tags}
                            </span>
                            </div>
                            <div className={s.technicalInfoWrapper}>
                            <span className={s.technicalInfoKey}>
                                Shares
                            </span>
                                <span style={{display: 'inline-flex'}}>
                                <span>:&nbsp;&nbsp;</span>
                                <span className={s.technicalInfoShare}>
                                    {shares}
                                </span>
                            </span>
                            </div>
                        </aside>
                    </div>
                </article>
            </section>
            <section className={s.description}>
                <ProductDescription
                    options={productAddition.addition}
                    value={descriptionValue}
                    onChange={(e) => setDescriptionValue(e.currentTarget.value)}
                />
            </section>
        </>

    );
};

export default SingleProduct;