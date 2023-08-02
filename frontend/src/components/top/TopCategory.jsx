import Slider from 'react-slick';
import React, { useEffect, useContext } from 'react';
import { getProducts } from '../../context/productContext/apiCall';
import { getCategorys } from '../../context/categoryContext/apiCall';
import { ProductContext } from '../../context/productContext/ProductContext';
import { CategoryContext } from '../../context/categoryContext/CategoryContext';

const TopCategory = ({cat}) => {
    const { categorys, dispatch } = useContext(CategoryContext);
    const { products, dispatch: productDispatch } = useContext(ProductContext);

    // Get Categorys
    useEffect(() => {
        getCategorys(dispatch);
        getProducts(cat, productDispatch);
    },[cat, dispatch, productDispatch])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                {categorys?.map((item, ind) => {
                    const categoryProducts = products?.filter((pro) => pro.categories.find((cat) => cat === item._id));
                    return (
                        <React.Fragment key={ind}>
                            <div className="box product">
                                <div className="nametop d-flex">
                                    <span className="tleft">{item.title}</span>
                                    <span className="tright">{categoryProducts?.length} Product</span>
                                </div>
                                <div className="img">
                                    <img src={item.cover ? item.cover : './img/top/category-3.png'} alt="img" />
                                </div>
                            </div>
                        </ React.Fragment>
                    )
                })}
            </Slider>
        </>
    )
};

export default TopCategory;
