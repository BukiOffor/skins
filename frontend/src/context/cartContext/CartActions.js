// ADD CART ACTION
const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item
});

const increaseQuantity = (id) => ({
    type: 'INCREASE_QUANTITY',
    payload: id
});

const decreaseQuantity = (id) => ({
    type: 'DECREASE_QUANTITY',
    payload: id
});

const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item
});

export { addToCart, increaseQuantity, decreaseQuantity, removeFromCart };
