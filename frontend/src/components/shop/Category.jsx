import React from 'react';
import Data from '../../DataStore';

const Category = () => {
    const { Catdata } = Data;

    return (
        <>
            <div className='category'>
                <div className='chead d-flex'>
                    <h1>Brands</h1>
                    <h1>Shops</h1>
                </div>
                {Catdata.map((val, ind) => {
                    return (
                        <div className='box f-flex' key={ind}>
                            <img src={val.cateImg} alt="img" />
                            <span>{val.cateName}</span>
                        </div>
                    )
                })}
                <div className='box box2'>
                    <button style={{fontFamily: '"Poppins", sans-serif', fontSize: '15px'}}>View All Brands</button>
                </div>
            </div>
        </>
    )
};

export default Category;
