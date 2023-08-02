import './discount.css'
import Slider from "react-slick";
import React, { useEffect, useContext } from 'react';
import { getProducts } from '../../context/productContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';


const DiscountCard = ({cat}) => {
    const { products, dispatch } = useContext(ProductContext);

    // Get Categorys
    useEffect(() => {
        getProducts(cat, dispatch);
    },[cat, dispatch])

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                } 
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                } 
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {products?.map((item, ind) => {
                    return (
                        <React.Fragment key={ind}>
                            <div className='box product'>
                                <div className='img'>
                                    <img src={item.img} alt='img' />
                                </div>
                                <h4>{item.title}</h4>
                                <div className="discount-price d-flex">
                                    <span  className="discounted">${item.price - 5}</span>
                                    <span className="old-price">${item.price}</span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </Slider>
        </>
    )
};

export default DiscountCard;
