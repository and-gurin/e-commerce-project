import Header from './layouts/header/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import SingleProductPage from './pages/SingleProductPage';
import ShopPage from '@/pages/ShopPage';
import CartPage from '@/pages/CartPage';
import React from 'react';

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/products/*' element={
                <>
                    <Routes>
                        <Route path='/:id' element={<SingleProductPage/>}/>
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
