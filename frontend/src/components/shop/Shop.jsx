import './style.css';
import Category from './Category';
import ShopCard from './ShopCard';
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
            <section className="shop background-2">
                <div className="container d-flex">
                    <Category />
                    <div className="content-width">
                        <div className="heading d-flex">
                            <div className="heading-left f-flex row">
                                <h2>Popular Products</h2>
                            </div>
                            <div className="heading-right f-flex">
                                <Link to='/shop'>
                                    <span>View all</span>
                                    <ArrowRightIcon />
                                </Link>
                            </div>
                        </div>
                        <div className="product-content grid1">
                            <ShopCard products={products} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Shop;
