import Breadcrumbs from '@/layouts/breadcrumbs/Breadcrumbs';
import Advantages from '@/layouts/advantages/advantages';
import React from 'react';
import Blog from '@/layouts/blog/Blog';

const CheckoutPage = () => {

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <Blog itemsPerPage={3}/>
            <Advantages/>
        </>
    );
};

export default CheckoutPage;