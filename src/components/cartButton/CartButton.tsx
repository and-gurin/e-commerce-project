import React from 'react';
import s from './CartButton.module.scss'
import {Link} from "react-router-dom";

const CartButton = ({title, onClick, borderRadius, width, height, bg, fontSize, link}:
                        {
                            title:string,
                            onClick?: ()=>void,
                            borderRadius: string,
                            width: string,
                            height: string,
                            bg: string,
                            fontSize?: string
                            link: string
                        }) => {
    return (
        <Link to={link}>
            <button className={s.button}
                    onClick={onClick}
                    style={
                        {
                            borderRadius: borderRadius,
                            width: width,
                            height: height,
                            background: bg,
                            fontSize: fontSize
                        }}>
                {title}
            </button>
        </Link>

    );
};

export default CartButton;