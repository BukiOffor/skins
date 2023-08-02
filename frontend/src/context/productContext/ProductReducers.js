const ProductsReducers = (state, action) => {
    switch (action.type) {
        // GET PRODUCT
        case 'GET_PRODUCT_START':
            return {
                product: {},
                isFetching: true,
                error: false
            };

        case 'GET_PRODUCT_SUCCESS':
            return {
                product: action.payload,
                isFetching: false,
                error: false
            };

        case 'GET_PRODUCT_FAILURE':
            return {
                product: {},
                isFetching: false,
                error: true
            };

        // GET ALL
        case 'GET_PRODUCTS_START':
            return {
                products: [],
                isFetching: true,
                error: false
            };

        case 'GET_PRODUCTS_SUCCESS':
            return {
                products: action.payload,
                isFetching: false,
                error: false
            };

        case 'GET_PRODUCTS_FAILURE':
            return {
                products: [],
                isFetching: false,
                error: true
            };

        default:
            return { ...state };
    }
};

export default ProductsReducers;
