import './index.css';
import App from './App';
import React from 'react';
import { store } from './store';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CartContextProvider } from './context/cartContext/CartContext';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { UserContextProvider } from './context/userContext/UserContext';
import { ProductContextProvider } from './context/productContext/ProductContext';
import { CategoryContextProvider } from './context/categoryContext/CategoryContext';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthContextProvider>
                <UserContextProvider>
                    <CategoryContextProvider>
                        <ProductContextProvider>
                            <CartContextProvider>
                                <App />
                            </CartContextProvider>
                        </ProductContextProvider>
                    </CategoryContextProvider>
                </UserContextProvider>
            </AuthContextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals