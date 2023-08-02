import './style.css';
import React from 'react';
import TopCategory from './TopCategory';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const TopCategories = () => {
    return (
        <>
            <section className='topCategory background'>
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left f-flex row">
                            <BorderAllIcon />
                            <h2>Top Categories</h2>
                        </div>
                        <div className="heading-right f-flex">
                            <span>View all</span>
                            <ArrowRightIcon />
                        </div>
                    </div>
                    <TopCategory />
                </div>
            </section>
        </>
    )
};

export default TopCategories;
