import './App.css';
import './responsive.css';
import themes from './themes';
import { lazy, useContext } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import Loadable from './components/loadable/Loadable';
import { AuthContext } from './context/authContext/AuthContext';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';

const Home = Loadable(lazy(() => import('./views/home')));
const Cart = Loadable(lazy(() => import('./views/cart')));
const Shop = Loadable(lazy(() => import('./views/shop')));
const Product = Loadable(lazy(() => import('./views/product')));
const Login = Loadable(lazy(() => import('./views/auth/Login')));
const Category = Loadable(lazy(() => import('./views/category')));
const Register = Loadable(lazy(() => import('./views/auth/Register')));

const App = () => {
    const { user } = useContext(AuthContext);
    const customization = useSelector((state) => state.customization);

    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <Router>
                        <Header />
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/products' element={<Shop />} />
                            <Route path='/product/:slug' element={<Product />} />
                            <Route path='/category/:slug' element={<Category />} />
                            <Route path='/login' element={!user ? <Login/> : <Navigate to='/' />} />
                            <Route path='/register' element={!user ? <Register/> : <Navigate to='/' />} />
                        </Routes>
                        <Footer />
                    </Router>
                </ThemeProvider>
            </StyledEngineProvider>
        </>
    )
};

export default App;

// const App = () => {
//     const { user } = useContext(AuthContext);
//     const [cartItem, setCartItem] = useState([]);
//     const customization = useSelector((state) => state.customization);

//     const addToCart = (product) => {
//         const productExist = cartItem.find((item) => item.id === product._id);
//         if(productExist){
//             setCartItem(cartItem.map((item) => item.id === product._id ? { ...productExist, qty: productExist.qty + 1 } : item));
//         } else {
//             setCartItem([ ...cartItem, { ...product, qty: 1 }]);
//         }
//     };

    // const decreaseQty = (product) => {
    //     const productExist = cartItem.find((item) => item.id === product._id);
    //     if(productExist === 1){
    //         setCartItem(cartItem.filter((item) => item.id !== product._id));
    //     } else {
    //         setCartItem(cartItem.map((item) => item.id === product._id ? { ...productExist, qty: productExist.qty - 1 } : item))
    //     };
    // };

//     return (
//         <>
//             <StyledEngineProvider injectFirst>
//                 <ThemeProvider theme={themes(customization)}>
//                     <CssBaseline />
//                     <Router>
//                         <Header cartItem={cartItem} />
//                         <Routes>
//                             <Route path='/shop/:id' element={<Product />} />
//                             <Route path='/category/:id' element={<Category />} />
//                             <Route path='/shop' element={<Shop addToCart={addToCart} />} />
//                             <Route path='/login' element={!user ? <Login/> : <Navigate to='/' />} />
//                             <Route path='/register' element={!user ? <Register/> : <Navigate to='/' />} />
//                             <Route path='/' element={<Home addToCart={addToCart} cartItem={cartItem} />} />
//                             <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />} />
//                         </Routes>
//                         <Footer />
//                     </Router>
//                 </ThemeProvider>
//             </StyledEngineProvider>
//         </>
//     )
// };

// export default App;
