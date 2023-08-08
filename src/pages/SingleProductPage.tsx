import SingleProduct from '@/layouts/single-product/SingleProduct';
import {OurProducts} from "@/layouts/our-products/OurProducts";
import {useState} from "react";

const SingleProductPage = () => {

    const [amount, setAmount] = useState(4)

    return (
        <>
            <SingleProduct/>
            <OurProducts amount={amount}
                         onClick={() => setAmount(amount + 4)}
                         title={'Our Products'}
                         pagination={false}/>
        </>
    );
};

export default SingleProductPage;