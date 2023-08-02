import config from '../../config';
import { axiosHandler, errorHandler } from '../../utils/utils';
import { 
    getCategorysStart, 
    getCategorysSuccess, 
    getCategorysFailure,  
    getAllCategorysStart,
    getAllCategorysSuccess, 
    getAllCategorysFailure 
} from './CategoryActions';

// GET ALL CATEGORYS
const getAllCategorys = async (dispatch) => {
    dispatch(getAllCategorysStart());
    try {
        const res = await axiosHandler({
            method: 'get',
            url: `${config.proxy}/cat/all`
        }).catch((e) => console.log(errorHandler(e)));
        dispatch(getAllCategorysSuccess(res.data.data));
    } catch (err) {
        dispatch(getAllCategorysFailure());
    }
};

// GET AGGREGATE CATEGORYS
const getCategorys = async (dispatch) => {
    dispatch(getCategorysStart());
    try {
        const res = await axiosHandler({
            method: 'get',
            url: `${config.proxy}/cat/aggregate`
        }).catch((e) => console.log(errorHandler(e)));
        dispatch(getCategorysSuccess(res.data.data));
    } catch (err) {
        dispatch(getCategorysFailure());
    }
};

export { getCategorys, getAllCategorys };
