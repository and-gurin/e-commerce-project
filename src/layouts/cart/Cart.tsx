import deleteIcon from '@/assets/svg/delete.svg';
import s from './Cart.module.scss'
import {useAppDispatch, useAppSelector} from '@/hooks/useAppDispatch';
import {deleteFromCart, subtotalInCart} from '@/features/cart/cartSlice';
import CartButton from "@/components/cartButton/CartButton";
import React from 'react';

const Cart = () => {

    const productIn = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch()
    const onClickDeleteProduct = (id: number) => {
        dispatch(deleteFromCart(id))
    }

    return (
        <section className={s.cart}>
            <table className={s.cartTable}>
                <thead className={s.cartTableHeader}>
                <tr>
                    <td className={s.cartTableHeaderImage}>{''}</td>
                    <td className={s.cartTableHeaderProduct}>Product</td>
                    <td className={s.cartTableHeaderPrice}>Price</td>
                    <td className={s.cartTableHeaderQuantity}>Quantity</td>
                    <td className={s.cartTableHeaderSubtotal}>Subtotal</td>
                    <td className={s.cartTableHeaderDelete}>{''}</td>
                </tr>
                </thead>
                <tbody className={s.cartTableBody}>
                {productIn.length ? productIn.map(product => {

                            const subtotal = product.price * product.quantity;
                            const productPrice = +product.price;

                            return (
                                <tr key={product.id}>
                                    <td>{<img className={s.cartTableBodyImage} src={product.src} width='105px' height='105px'
                                              alt={product.alt}/>}</td>
                                    <td>{product.title}</td>
                                    <td>{`Rp ${productPrice.toLocaleString('en-US')}`}</td>
                                    <td className={s.cartTableBodyQuantity}>
                                        <span className={s.cartTableBodyQuantityInner}>{product.quantity}</span>
                                    </td>
                                    <td className={s.cartTableBodySubtotal}>{`Rp ${subtotal.toLocaleString('en-US')}`}</td>
                                    <td className={s.cartTableBodyDelete}>
                                        <button className={s.cartTableBodyDeleteButton}
                                                onClick={() => onClickDeleteProduct(product.id)}>
                                            <img src={deleteIcon} width='28px' height='28px' alt='delete-icon'/>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    )
                    : null
                }
                </tbody>
            </table>
            <aside className={s.cartTotals}>
                <p className={s.cartTotalsTitle}>Cart Totals</p>
                <div className={s.cartTotalsRow}>
                    <span className={s.cartTotalsSubtitle}>Subtotal</span>
                    <span className={s.cartTotalsSubtotal}>{`Rp ${subtotalInCart(productIn).toLocaleString('en-US')}`}</span>
                </div>
                <div className={s.cartTotalsRow}>
                    <span className={s.cartTotalsSubtitle}>Total</span>
                    <span className={s.cartTotalsTotal}>{`Rp ${subtotalInCart(productIn).toLocaleString('en-US')}`}</span>
                </div>
                <CartButton title='Check Out'
                            width='222px'
                            height='59px'
                            borderRadius='15px'
                            bg={'transparent'}
                            link={'#'}
                            //onClick={onClickAddToCart}
                />
            </aside>
        </section>
    );
};

export default Cart;