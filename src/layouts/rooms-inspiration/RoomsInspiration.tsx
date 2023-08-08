import Slider from "react-slick";
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import inner from '@/assets/rooms/inner.png'
import dinner from '@/assets/rooms/dining.png'
import bedroom from '@/assets/rooms/bedroom.png'
import living from '@/assets/rooms/living.png'
import sliderRight from '@/assets/svg/slider-right-arrow.svg'
import './RoomsInspiration.scss'
import {Link} from 'react-router-dom';

const links = [
    {src:inner, title: 'Inner Peace', description: '01 - Bedroom',},
    {src:dinner, title: 'Dinner Peace', description: '02 - Dinner',},
    {src:bedroom, title: 'Bedroom Peace', description: '03 - Bedroom',},
    {src:living, title: 'Living Peace', description: '04 - Living room',}
]

const RoomsInspiration = () => {

    const settings = {
        className: 'center',
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        cssEase: "linear",
        nextArrow: <svg width='64' height='64' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g id='Ellipse 4' filter='url(#filter0_d_117_484)'>
                <circle cx='39' cy='39' r='30' fill='white' />
            </g>
            <g id='Right 24px'>
                <path id='Arrow' d='M35 33L43 39L35 45' stroke='#B88E2F' strokeWidth='3.2' strokeLinecap='round' strokeLinejoin='round' />
            </g>
            <defs>
                <filter id='filter0_d_117_484' x='0' y='0' width='78' height='78' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                    <feFlood floodOpacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feMorphology radius='1' operator='dilate' in='SourceAlpha' result='effect1_dropShadow_117_484' />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='7' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_117_484' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_117_484' result='shape' />
                </filter>
            </defs>
        </svg>,
        dotsClass: 'custom-dots',
        customPaging: function () {
            return <svg width='27' height='27' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g id='Active'>
                    <circle id='second_ellipse' opacity='0.7' cx='13.5' cy='13.5' r='13' stroke='currentColor' fill='currentColor' />
                    <circle id='second_ellipse_inner' cx='13.5' cy='13.5' r='12' stroke='none' fill='#FCF8F3' />
                    <circle id='first_ellipse' cx='13.5' cy='13.5' r='5' stroke='currentColor' fill='currentColor' />
                </g>
            </svg>;
        },
    };

    return (
        <section className='wrapper'>
            <div className='promo'>
                <h3 className='promoTitle'>
                    50+ Beautiful rooms<br/>
                    inspiration
                </h3>
                <p className='promoSubtitle'>
                    Our designer already made a lot of beautiful prototipe of rooms that inspire you
                </p>
                <button className='promoButton'>
                    Explore More
                </button>
            </div>
            <div className='slider'>
                <Slider {...settings}>
                    {links.map((link, index) =>
                        <div key={index}>
                            <img src={link.src} alt=""/>
                            <div className='sliderAside'>
                                <p className='sliderDescription'>
                                    {link.description}
                                </p>
                                <p className='sliderTitle'>
                                    {link.title}
                                </p>
                                <Link className='sliderArrowButton' to='#'>
                                    <img src={sliderRight} width='48px' height='48px' alt='slider-arrow-button'/>
                                </Link>
                            </div>
                        </div>
                    )}
                </Slider>

            </div>
        </section>

    );
};

export default RoomsInspiration;