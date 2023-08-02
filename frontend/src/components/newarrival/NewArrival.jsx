import { Link } from 'react-router-dom';
import React, { useEffect, useContext } from 'react';
import { getProducts } from '../../context/productContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';

const NewArrival = ({cat}) => {
    const { products, dispatch } = useContext(ProductContext);

    // Get Categorys
    useEffect(() => {
        getProducts(cat, dispatch);
    },[cat, dispatch])

    return (
        <>
            <div className="content grid product">
                {products?.map((item, ind) => {
                    return (
                        <div className="box" key={ind}>
                            <div className="img">
                                <img src={item.img} alt="img" />
                            </div>
                            <h4><Link to={`/product/${item.slug}`}>{item.title}</Link></h4>
                            <span>${item.price}</span>
                        </div>
                    )
                }).sort((a, b) => a - b).slice(0,6)}
            </div>
        </>
    )
};

export default NewArrival;
