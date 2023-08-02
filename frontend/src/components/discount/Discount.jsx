import React from 'react';
import DiscountCard from './DiscountCard';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Discount = () => {
    return (
        <>
            <section className='disocunt newarrivals background'>
                <div className='container'>
                    <div className='heading d-flex'>
                        <div className='heading-left f-flex row'>
                            <img src='https://img.icons8.com/windows/32/fa314a/gift.png' alt='img' />
                            <h2>Big Discounts</h2>
                        </div>
                        <div className='heading-right f-flex '>
                            <span>View all</span>
                            <ArrowRightIcon />
                        </div>
                    </div>
                    <DiscountCard />
                </div>
            </section>
        </>
    )
};

export default Discount;
