import './style.css';
import React from 'react';
import Data from '../../DataStore';

const Wrapper = () => {
    const { Wradata } = Data;
    return (
        <>
           <section className='wrapper background'>
                <div className='container grid-2'>
                {Wradata.map((val, ind) => {
                    return (
                        <div className='product' key={ind}>
                            <div className='img icon-circle'>{val.cover} </div>
                            <h3>{val.title}</h3>
                            <p>{val.decs}</p>
                        </div>
                    )
                })}
                </div>
            </section> 
        </>
    )
};

export default Wrapper;
