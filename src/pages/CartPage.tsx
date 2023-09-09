import Breadcrumbs from "@/layouts/breadcrumbs/Breadcrumbs";
import Advantages from "@/layouts/advantages/advantages";
import Cart from "@/layouts/cart/Cart";
import React from "react";

const CartPage = () => {

    return (
        <>
            <Breadcrumbs pageTitle={true}/>
            <Cart/>
            <Advantages/>
        </>
    );
};

export default CartPage;