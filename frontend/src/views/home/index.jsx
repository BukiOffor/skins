import './home.css';
import React from 'react';
import Shop from '../../components/shop/Shop';
import Slider from '../../components/slider/Slider';
import Wrapper from '../../components/wrapper/Wrapper';
import Discount from '../../components/discount/Discount';
import TopCategories from '../../components/top/TopCategories';
import Categories from '../../components/categories/Categories';
import FlashDeals from '../../components/flashdeals/FlashDeals';
import NewArrivals from '../../components/newarrival/NewArrivals';
import Announcement from '../../components/announcement/Announcement';

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className="container a-flex">
                    <Categories />
                    <Slider />
                    <Wrapper />
                    <FlashDeals />
                    <TopCategories />
                    <NewArrivals />
                    <Discount />
                    <Shop />
                    <Announcement />
                </div>
            </section>
        </>
    )
};

export default Home;
