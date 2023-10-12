import React from 'react';
import s from './CartButton.module.scss'
import {Link} from "react-router-dom";

const CartButton = ({title, onClick, borderRadius, width, height, bg, fontSize, link, icon, color, fontWeight, border}:
                        {
                            title:string,
                            onClick?: ()=>void,
                            borderRadius: string,
                            width: string,
                            height: string,
                            bg: string,
                            fontSize?: string
                            link: string
                            icon?: string
                            color?: string
                            fontWeight?: string
                            border?: string
                        }) => {
    return (
        <Link to={link}>
            <button className={icon ? s.button + ' ' + s.button_icon : s.button}
                    onClick={onClick}
                    style={
                        {
                            borderRadius: borderRadius,
                            width: width,
                            height: height,
                            background: bg,
                            fontSize: fontSize,
                            color: color,
                            fontWeight: fontWeight,
                            border: border
                        }}>
                <p>{title}</p>
                {icon && <img src={icon} width='18px' height='9px' alt='button-icon'/>}
            </button>
        </Link>

    );
};

export default CartButton;