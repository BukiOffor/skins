import PropTypes from 'prop-types';
import CartReducers from './CartReducers';
import { createContext, useReducer, useEffect } from 'react';

const INITIAL_STATE = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    isFetching: false,
    error: false
};

const CartContext = createContext(INITIAL_STATE);

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducers, INITIAL_STATE);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);
    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

CartContextProvider.propTypes = {
    children: PropTypes.node
};

export { CartContext, CartContextProvider };

// 2023
// nttgoabroad.com
