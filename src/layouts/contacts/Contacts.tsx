import React from 'react';
import s from './Contacts.module.scss'
import addressIcon from '@/assets/svg/address-icon.svg'
import phoneIcon from '@/assets/svg/phone-icon.svg'
import timeIcon from '@/assets/svg/time-icon.svg'
import Input from "@/components/input/Input";
import Textarea from "@/components/textarea/Textarea";
import CartButton from "@/components/cartButton/CartButton";

const addressOptions = [
    {
        id: 1,
        icon: addressIcon,
        alt: 'address-icon',
        title: 'Address',
        subtitle: '236 5th SE Avenue, New York NY10000, United States'},
    {
        id: 2,
        icon: phoneIcon,
        alt: 'phone-icon',
        title: 'Phone',
        subtitle: 'Mobile: +(84) 546-6789  Hotline: +(84) 456-6789'},
    {
        id: 3,
        icon: timeIcon,
        alt: 'working-time-icon',
        title: 'Working Time',
        subtitle: 'Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00'},

]

const addressOptionsList = addressOptions.map(option => {
    return (
        <div className={s.contacts__copy + ' ' + s.copy} key={option.id}>
            <img src={option.icon} width='22px' height='28px' alt={option.alt}/>
            <div className={s.copy__description}>
                <p className={s.copy__title}>{option.title}</p>
                <p className={s.copy__subtitle}>{option.subtitle}</p>
            </div>
        </div>
    )
})

export const Contacts = () => {
    return (
        <section className={s.contacts}>
                <h5 className={s.contacts__title}>Get In Touch With Us</h5>
                <p className={s.contacts__subtitle}>
                    For More Information About Our Product & Services.
                    Please Feel Free To Drop Us An Email.
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            <div className={s.contacts__content}>
                <address className={s.contacts__address}>
                    {addressOptionsList}
                </address>
                <form className={s.form}>
                    <div className={s.form__input}>
                        <Input textLabel={'Your name'} placeholderText={'Abc'} width={'527px'}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'Email address'} placeholderText={'Abc@def.com'} width={'527px'}/>
                    </div>
                    <div className={s.form__input}>
                        <Input textLabel={'Subject'} placeholderText={'This is an optional'} width={'527px'}/>
                    </div>
                    <div className={s.form__input_textarea}>
                        <Textarea
                            textLabel={'Message'}
                            placeholderText={'Hi! i’d like to ask about'}
                            height={'120px'}
                            width={'527px'}
                        />
                    </div>
                    <div className={s.table__button}>
                        <CartButton title='Submit'
                                    width='237px'
                                    height='55px'
                                    bg={'#B88E2F'}
                                    borderRadius={'5px'}
                                    link={'#'}
                                    fontSize={'20px'}
                                    fontWeight={'400'}
                                    color={'#FFFFFF'}
                                    border={'none'}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};