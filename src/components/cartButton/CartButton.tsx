import s from './CartButton.module.scss'

const CartButton = ({title, onClick, borderRadius, width, height, bg, fontSize}:
                        {
                            title:string,
                            onClick?: ()=>void,
                            borderRadius: string,
                            width: string,
                            height: string,
                            bg: string,
                            fontSize?: string}) => {
    return (
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
    );
};

export default CartButton;