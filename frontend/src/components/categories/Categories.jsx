import { Link } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { getProducts } from '../../context/productContext/apiCall';
import { getCategorys } from '../../context/categoryContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';
import { CategoryContext } from '../../context/categoryContext/CategoryContext';

const Categories = ({cat}) => {
    const { categorys, dispatch } = useContext(CategoryContext);
    const { products, dispatch: productDispatch } = useContext(ProductContext);

    // Get Categorys
    useEffect(() => {
        getCategorys(dispatch);
        getProducts(cat, productDispatch);
    },[cat, dispatch, productDispatch])

    return (
        <>
            <div className="category">
                {categorys?.map((item, ind) => {
                    let categoryProducts = products?.filter((pro) => pro.categories.find((cat) => cat === item._id));
                    return(
                        <div className="f-flex box" key={ind}>
                            <img src='./img/categories/cat4.png' alt='img' />
                            <span><Link to={`/category/${item.slug}`}>{item.title}</Link> ({categoryProducts?.length})</span>
                        </div>
                    )
                })}
                <div className="f-flex box">
                    <span className='more'><Link to='#'><ArrowRightIcon />More</Link></span>
                </div>
            </div>
        </>
    )
};

export default Categories;
