import './style.css';
import React from 'react';
import NewArrival from './NewArrival';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const NewArrivals = () => {
    return (
        <>
            <section className='newarrivals background-2'>
                <div className="container">
                    <div className="heading d-flex">
                        <div className="heading-left f-flex row">
                            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt='img'/>
                            <h2>New Arrivals</h2>
                        </div>
                        <div className="heading-right f-flex">
                            <span>View all</span>
                            <ArrowRightIcon />
                        </div>
                    </div>
                    <NewArrival />
                </div>
            </section>
        </>
    )
};

export default NewArrivals;
