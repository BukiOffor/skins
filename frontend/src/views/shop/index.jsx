import './shop.css';
import ShopCard from './ShopCard';
import React, { useContext, useEffect } from 'react';
import { getProducts } from '../../context/productContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';

const Shop = ({ cat }) => {
    const { products, dispatch } = useContext(ProductContext);

    // GET PRODUCTS
    useEffect(() => {
        getProducts(cat, dispatch);
    }, [cat, dispatch]);

    return (
        <>
            <section className='shop'>
                <div className="container d-flex">
                    <div className="content-width">
                        <div className="heading d-flex">
                            <div className="heading-left f-flex row">
                                <h2>Products</h2>
                            </div>
                        </div>
                        <div className="product-content grid-2">
                            <ShopCard products={products} />
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
};

export default Shop;
