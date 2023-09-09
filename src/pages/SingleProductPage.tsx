import SingleProduct from '@/layouts/single-product/SingleProduct';
import {OurProducts} from "@/layouts/our-products/OurProducts";
import {useState} from "react";
import React from 'react';

const SingleProductPage = ({setIsOpen}: {setIsOpen: (isOpen: boolean) => void}) => {

    const [amount, setAmount] = useState(4)

    return (
        <>
            <SingleProduct setIsOpen={setIsOpen}/>
            <OurProducts amount={amount}
                         onClick={() => setAmount(amount + 4)}
                         sort={null}
                         title={'Our Products'}
                         itemsPerPage={2}
                         pagination={false}
                         setIsOpen={setIsOpen}
            />
        </>
    );
};

export default SingleProductPage;