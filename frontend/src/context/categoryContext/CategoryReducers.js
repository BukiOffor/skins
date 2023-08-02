const CategorysReducers = (state, action) => {
    switch (action.type) {
        // GET CATEGORYS
        case 'GET_CATEGORYS_START':
            return {
                categorys: [],
                isFetching: true,
                error: false
            };

        case 'GET_CATEGORYS_SUCCESS':
            return {
                categorys: action.payload,
                isFetching: false,
                error: false
            };

        case 'GET_CATEGORYS_FAILURE':
            return {
                categorys: [],
                isFetching: false,
                error: true
            };

        // ALL CATEGORYS
        case 'GET_ALL_CATEGORYS_START':
            return {
                allcategorys: [],
                isFetching: true,
                error: false
            };

        case 'GET_ALL_CATEGORYS_SUCCESS':
            return {
                allcategorys: action.payload,
                isFetching: false,
                error: false
            };

        case 'GET_ALL_CATEGORYS_FAILURE':
            return {
                allcategorys: [],
                isFetching: false,
                error: true
            };

        default:
            return { ...state };
    }
};

export default CategorysReducers;
