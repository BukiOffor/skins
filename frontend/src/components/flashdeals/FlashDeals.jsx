import FlashCard from './FlashCard';
import React, { useContext, useEffect } from 'react';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { getProducts } from '../../context/productContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';

const FlashDeals = ({ cat, addToCart }) => {
    const { products, dispatch } = useContext(ProductContext);
    const flashDealProducts = products?.filter((pro) => pro.flashDeal === true);

    // GET PRODUCTS
    useEffect(() => {
        getProducts(cat, dispatch);
    }, [cat, dispatch]);

    return (
        <>
            <section className="flash background-2">
                <div className="container">
                    <div className="heading f-flex">
                        <OfflineBoltIcon />
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard flashDealProducts={flashDealProducts} addToCart={addToCart} />
                </div>
            </section>
        </>
    )
};

export default FlashDeals;
