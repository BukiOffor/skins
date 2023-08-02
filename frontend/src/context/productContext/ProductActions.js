// GET PRODUCT ACTION
const getProductStart = () => ({
    type: 'GET_PRODUCT_START'
});

const getProductSuccess = (product) => ({
    type: 'GET_PRODUCT_SUCCESS',
    payload: product
});

const getProductFailure = () => ({
    type: 'GET_PRODUCT_FAILURE'
});

// GET PRODUCTS ACTION
const getProductsStart = () => ({
    type: 'GET_PRODUCTS_START'
});

const getProductsSuccess = (products) => ({
    type: 'GET_PRODUCTS_SUCCESS',
    payload: products
});

const getProductsFailure = () => ({
    type: 'GET_PRODUCTS_FAILURE'
});

export { getProductStart, getProductSuccess, getProductFailure, getProductsStart, getProductsSuccess, getProductsFailure };
