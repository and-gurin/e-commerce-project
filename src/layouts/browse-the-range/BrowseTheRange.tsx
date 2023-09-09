import s from './BrowseTheRange.module.scss'
import dining from '@/assets/home-page/dining.png'
import living from '@/assets/home-page/living.png'
import bedroom from '@/assets/home-page/bedroom.png'
import {Link} from "react-router-dom";
import React from 'react';

const width = '381px';
const height = '480px' ;

const cards = [
    {id: 1, src: dining, alt: 'dining', width, height, href: '#', title:'Dining'},
    {id: 2, src: living, alt: 'living', width, height, href: '#', title:'Living'},
    {id: 3, src: bedroom, alt: 'bedroom', width, height, href: '#', title:'Bedroom'}
]

const Card = () => {
    return <>
        {
            cards.map(card =>
                <article key={card.id}>
                    <Link to={card.href}>
                        <img src={card.src}
                             className={s.card}
                             width={card.width}
                             height={card.height}
                             alt={card.alt}/>
                        <h4 className={s.cardTitle}>
                            {card.title}
                        </h4>
                    </Link>
                </article>
            )
        }
    </>
}

const BrowseTheRange = () => {
    return (
        <section>
            <p className={s.title}>
                Browse The Range
            </p>
            <p className={s.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={s.cards}>
                <Card/>
            </div>
        </section>
    );
};

export default BrowseTheRange;