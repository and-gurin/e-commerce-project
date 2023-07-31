import Header from './layouts/header/Header';
import HomePage from './pages/HomePage';
import Footer from "./layouts/footer/Footer";
import { Routes, Route } from 'react-router-dom';
import SingleProductPage from "./pages/SingleProductPage";

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
            </Routes>

            <Footer/>
        </>
    )
}

export default App
