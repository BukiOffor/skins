export const sumCartItems = (cart) => {
    let cartSubTotal = 0
    const arr = cart.map(cat => cat.total)
    for(let ind = 0; ind < arr.length; ind ++){
        cartSubTotal += arr[ind];
    }
    return {  
        cartSubTotal 
    }
};

const CartReducers = (state, action) => {
    switch (action.type) {
        // Add item to Cart, the default Quantity is 1
        case 'ADD_TO_CART':
            if(!state.cart.find(item => item._id === action.payload._id)){
                state.cart.push({
                    ...action.payload,
                    ...state.quantity += 1,
                    ...state.total += action.payload.price * action.payload.quantity
                })
            }
            return {
                ...state,
                cart: [...state.cart],
                cartSubTotal: sumCartItems(state.cart)
            };
        
        // Increase the product quantity by one on every click action in Cart Page
        case 'INCREASE_QUANTITY':
            const increaseCartQuantity = state.cart.map((item) => {
                if(item._id === action.payload){
                    return {
                        ...item, 
                        quantity: item.quantity + 1,
                        total: (item.quantity + 1) * item.price
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: increaseCartQuantity,
                cartSubTotal: sumCartItems(increaseCartQuantity)
            };
        
        // Decrease the product quantity by one on every clcik action, then on getting to zero, remove it from cart
        case 'DECREASE_QUANTITY':
            const decreaseCartQuantity = state.cart.map((item) => {
                if(item._id === action.payload){
                    return {
                        ...item, 
                        quantity: item.quantity - 1,
                        total: (item.quantity - 1) * item.price
                    };
                }
                return item;
            }).filter((item) => {
                return item.quantity !== 0;
            });
            return {
                ...state,
                cart: decreaseCartQuantity,
                cartSubTotal: sumCartItems(decreaseCartQuantity)
            };

        // Remove the product from cart on click action
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload._id)
            };

        // CREATE
        case 'CREATE_CART_START':
            return {
                ...state,
                isFetching: true,
                error: false
            };

        case 'CREATE_CART_SUCCESS':
            return {
                cart: [...state.cart, action.payload],
                isFetching: false,
                error: false
            };

        case 'CREATE_CART_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: true
            };

        default:
            return { ...state };
    }
};

export default CartReducers;
