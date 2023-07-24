import React from 'react';
import SingleProduct from '../layouts/single-product/SingleProduct';
import {OurProducts} from "../layouts/our-products/OurProducts";

const SingleProductPage = () => {
    return (
        <>
            <SingleProduct/>
            <OurProducts title={'Related Products'}/>
        </>
    );
};

export default SingleProductPage;