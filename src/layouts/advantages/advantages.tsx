import React from 'react';
import s from './advantages.module.scss'
import Trophy from "@/assets/svg/Trophy";
import Guarantee from "@/assets/svg/Guarantee";
import Shipping from "@/assets/svg/Shipping";
import CustomerSupport from "@/assets/svg/Customer-support";
import {Link} from "react-router-dom";


const advantagesLinks = [
    {id: 1, icon: <Trophy/>, title: 'High Quality', subTitle: 'crafted from top materials', href: '#'},
    {id: 2, icon: <Guarantee/>, title: 'Warranty Protection', subTitle: 'Over 2 years', href: '#'},
    {id: 3, icon: <Shipping/>, title: 'Free Shipping', subTitle: 'Order over 150 $', href: '#'},
    {id: 4, icon: <CustomerSupport/>, title: '24 / 7 Support', subTitle: 'Dedicated support', href: '#'},
]

const advantagesList = advantagesLinks.map(advantage =>
    <li key={advantage.id}>
        <Link to={advantage.href} className={s.advantages__link}>
            {advantage.icon}
            <div className={s.advantages__description}>
                <p className={s.advantages__title}>{advantage.title}</p>
                <p className={s.advantages__subtitle}>{advantage.subTitle}</p>
            </div>
        </Link>
    </li>
)

const Advantages = () => {
    return (
        <section className={s.advantages}>
            <ul className={s.advantages__list}>
                {advantagesList}
            </ul>
        </section>
    );
};

export default Advantages;