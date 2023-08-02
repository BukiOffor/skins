import config from '../../config';
import { axiosHandler, errorHandler } from '../../utils/utils';

// CREATE CART
const createCart = async (cartData) => {
    try {
        await axiosHandler({
            method: 'post',
            url: `${config.proxy}/cart/`,
            data: cartData,
            token: JSON.parse(localStorage.getItem('user')).accessToken
        }).catch((e) => console.log(errorHandler(e)));
    } catch (err) {
        console.log(err);
    }
};

export { createCart };
