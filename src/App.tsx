import Header from './layouts/header/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import SingleProductPage from './pages/SingleProductPage';
import ShopPage from '@/pages/ShopPage';
import CartPage from '@/pages/CartPage';
import React, {useEffect, useState} from 'react';
import CartPopup from "@/components/cartPopup/CartPopup";
import {useAppSelector} from "@/hooks/useAppDispatch";

function App() {

    const productInCart = useAppSelector(state => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        isOpen && (document.body.style.overflow = 'hidden')
        !isOpen && (document.body.style.overflow = 'unset')
    }, [isOpen])

    return (
        <>
            {isOpen && <CartPopup setIsOpen={setIsOpen}
                                  productInCart={productInCart}
            />}
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage setIsOpen={setIsOpen}/>}/>
                <Route path='/products/*' element={
                <>
                    <Routes>
                        <Route path='/:id' element={<SingleProductPage setIsOpen={setIsOpen}/>}/>
                    </Routes>

                </>
                }/>
                <Route path='/shop' element={<ShopPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>

            <Footer/>
        </>
    )
}

export default App
