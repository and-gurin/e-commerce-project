import Breadcrumbs from '@/layouts/breadcrumbs/Breadcrumbs';
import Advantages from '@/layouts/advantages/advantages';
import React from 'react';
import Checkout from '@/layouts/checkout/Checkout';

const CheckoutPage = () => {

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <Checkout/>
            <Advantages/>
        </>
    );
};

export default CheckoutPage;