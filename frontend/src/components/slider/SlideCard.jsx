import React from 'react'
import Slider from 'react-slick';
import Data from '../../DataStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideCard = () => {
    const { Sdata } = Data;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((val, ind) => {
                    return(
                        <div className="box a-flex" key={ind}>
                            <div className="left">
                                <h1>{val.title}</h1>
                                <p>{val.desc}</p>
                                <button className='btn-primary'>Visit Collection</button>
                            </div>
                            <div className="right">
                                <img src={val.cover} alt="" />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default SlideCard
