import React from 'react';
import s from './CartPopup.module.scss'
import quitIcon from '@/assets/svg/close-popup-icon.svg';
import deleteIcon from '@/assets/svg/delete-round-icon.svg';
import {ProductType} from '@/features/product/productSlice';
import {deleteFromCart, subtotalInCart} from '@/features/cart/cartSlice';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import CartButton from "@/components/cartButton/CartButton";

const Popover = ({setIsOpen, productInCart,}:
                     {
                         setIsOpen: (isOpen: boolean) => void
                         productInCart: ProductType[]
                     }) => {

    const dispatch = useAppDispatch()

    const onClickDeleteProduct = (id: number) => {
        dispatch(deleteFromCart(id))
    }

    return (
        <>
            <div className={s.darkBG} onClick={() => setIsOpen(false)}/>
            <div className={s.popup}>
                <div className={s.popup__header}>
                    <h4 className={s.popup__title}>Shopping Cart</h4>
                    <button className={s.popup__quitButton}
                            onClick={() => setIsOpen(false)}>
                        <img src={quitIcon} width='17px' height='19px' alt='quit-icon'/>
                    </button>
                </div>
                <div className={s.content}>
                    {productInCart.length ? productInCart.map(product => {

                        const productPrice = +product.price;

                        return (
                            <div key={product.id} className={s.content__item}>
                                <div className={s.content__param}>
                                    <img className={s.content__img} src={product.src} width='105px' height='105px'
                                         alt={product.alt}/>
                                    <div className={s.content__description}>
                                        <p className={s.content__title}>
                                            {product.title}
                                        </p>
                                        <span className={s.content__quantity}>{`${product.quantity}   `}</span>
                                        <span className={s.content__quantityX}>X</span>
                                        <span className={s.content__price}>{`   Rs.${productPrice.toLocaleString('en-US')}`}</span>
                                    </div>
                                </div>
                                <button className={s.content__deleteButton}
                                        onClick={() => onClickDeleteProduct(product.id)}>
                                    <img src={deleteIcon} width='20px' height='20px' alt='delete-icon'/>
                                </button>
                            </div>
                        )
                    }) : null}
                </div>
                <div className={s.content__footer}>
                    <span className={s.content__title}>Subtotal</span>
                    <span className={s.content__subtotal}>{`Rp ${subtotalInCart(productInCart).toLocaleString('en-US')}`}</span>
                </div>
                <div className={s.popup__footer}>
                    <CartButton title='Cart'
                                width='87px'
                                height='30px'
                                borderRadius='15px'
                                bg={'transparent'}
                                link={'/cart'}
                                fontSize={'12px'}
                                onClick={() => setIsOpen(false)}
                    />
                    <CartButton title='Checkout'
                                width='118px'
                                height='30px'
                                borderRadius='15px'
                                bg={'transparent'}
                                link={'#'}
                                fontSize={'12px'}
                    />
                    <CartButton title='Comparison'
                                width='135px'
                                height='30px'
                                borderRadius='15px'
                                bg={'transparent'}
                                link={'#'}
                                fontSize={'12px'}
                    />
                </div>
            </div>
        </>
    );
};

export default Popover;