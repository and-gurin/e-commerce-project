import React, {useState} from 'react';
import s from './Checkout.module.scss'
import Input from '@/components/input/Input';
import Select from '@/components/select/Select';
import {useAppSelector} from '@/hooks/useAppDispatch';
import {subtotalInCart} from "@/features/cart/cartSlice";
import RadioAccordion from "@/components/radioAccordion/RadioAccordion";
import CartButton from "@/components/cartButton/CartButton";

const countryOptions = [
    {id: 1, value: 'Sri Lanka'},
    {id: 2, value: 'Poland'},
    {id: 3, value: 'Namibia'},
]

const provinceOptions = [
    {id: 1, value: 'Western Province'},
    {id: 2, value: 'Eastern Province'},
    {id: 3, value: 'Southern Province'},
]

const radioOptions = [
    {
        id: '1',
        title: 'Direct Bank Transfer',
        content: `Make your payment directly into our bank account. 
        Please use your Order ID as the payment reference. 
        Your order will not be shipped until the funds have cleared in our account.`
    },
    {
        id: '2',
        title: 'Direct Bank Transfer',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    },
    {
        id: '3',
        title: 'Cash On Delivery',
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },
]


const Checkout = () => {

    const productInCart = useAppSelector(state => state.cart);
    const [radioValue, setRadioValue] = useState('')

    return (
        <section className={s.checkout}>
            <div className={s.checkout__wrapper}>
                <form className={s.form}>
                    <p className={s.form__title}>Billing details</p>
                    <div className={s.form__doubleInput}>
                        <Input textLabel={'First Name'} width={'211px'}/>
                        <Input textLabel={'Last Name'} width={'211px'}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'Company Name (Optional)'}/>
                    </div>
                    <div className={s.form__input}>
                        <Select textLabel={'Country / Region'} options={countryOptions}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'Street address'}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'Town / City'}/>
                    </div>
                    <div className={s.form__input}>
                        <Select textLabel={'Province'} options={provinceOptions}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'ZIP code'}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'Phone'}/>
                    </div>
                    <div className={s.form__input + ' ' + s.form__input_email}>
                        <Input textLabel={'Email address'}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={''} placeholderText={'Additional information'}/>
                    </div>
                </form>
                <aside className={s.order}>
                    <div className={s.order__cartTotal}>
                        <div className={s.order__param + ' ' + s.order__param_title}>
                            <div className={s.order__title}>Product</div>
                            <div className={s.order__title}>Subtotal</div>
                        </div>
                        {productInCart.length ? productInCart.map(product => {

                            const productPrice = +product.price;

                            return (
                                <div className={s.order__param}>
                                    <div className={s.order__description}>
                                        <span className={s.order__name}>{product.title}</span>
                                        <span className={s.order__quantity}>
                                        &nbsp;&nbsp;X&nbsp;&nbsp;{`${product.quantity}`}
                                    </span>
                                    </div>
                                    <div className={s.order__price}>
                                        {`Rs.${productPrice.toLocaleString('en-US')}`}
                                    </div>
                                </div>
                            )
                        }) : null}
                        <div className={s.order__param}>
                            <div className={s.order__subtotal}>Subtotal</div>
                            <div className={s.order__price}>
                                {`Rp ${subtotalInCart(productInCart).toLocaleString('en-US')}`}
                            </div>
                        </div>
                        <div className={s.order__param + ' ' + s.order_param_totalPrice}>
                            <div className={s.order__subtotal}>Total</div>
                            <div className={s.order__totalPrice}>
                                {`Rp ${subtotalInCart(productInCart).toLocaleString('en-US')}`}
                            </div>
                        </div>
                    </div>
                    {radioOptions.map(radio => {
                        return (
                            <RadioAccordion value={radioValue}
                                            id={radio.id}
                                            title={radio.title}
                                            content={radio.content}
                                            onChange={(e) => setRadioValue(e.currentTarget.value)}/>
                        )
                    })}
                    <p className={s.order__subtitle}>
                        Your personal data will be used to support your experience
                        throughout this website, to manage access to your account,
                        and for other purposes described in our <b>privacy policy.</b>
                    </p>
                    <div className={s.order__button}>
                        <CartButton title='Order'
                                    width='318px'
                                    height='64px'
                                    borderRadius='15px'
                                    bg={'transparent'}
                                    link={'#'}
                        />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default Checkout;