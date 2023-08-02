// GET CATEGORYS ACTION
const getCategorysStart = () => ({
    type: 'GET_CATEGORYS_START'
});

const getCategorysSuccess = (categorys) => ({
    type: 'GET_CATEGORYS_SUCCESS',
    payload: categorys
});

const getCategorysFailure = () => ({
    type: 'GET_CATEGORYS_FAILURE'
});

// GET ALL CATEGORYS ACTION
const getAllCategorysStart = () => ({
    type: 'GET_ALL_CATEGORYS_START'
});

const getAllCategorysSuccess = (allcategorys) => ({
    type: 'GET_ALL_CATEGORYS_SUCCESS',
    payload: allcategorys
});

const getAllCategorysFailure = () => ({
    type: 'GET_ALL_CATEGORYS_FAILURE'
});

export { 
    getCategorysStart, 
    getCategorysSuccess, 
    getCategorysFailure,
    getAllCategorysStart,
    getAllCategorysSuccess, 
    getAllCategorysFailure
};
