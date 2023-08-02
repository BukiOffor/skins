import swal from 'sweetalert';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { addToCart } from '../../context/cartContext/CartActions';
import { CartContext } from '../../context/cartContext/CartContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const NextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <ArrowForwardIcon />
            </button>
        </div>
    )
}

const PrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <ArrowBackIcon />
            </button>
        </div>
    )
}

const FlashCard = ({ flashDealProducts }) => {
    const [count, setCount] = useState(0);
    const { user } = useContext(AuthContext);
    const { dispatch } = useContext(CartContext);

    const increment = () => {
        setCount(count + 1);
    };

    // Update Cart
    const handleClick = (item) => {
        const quantity = 1
        const productId = item._id
        const total = item.price * quantity;
        if(user){
            dispatch(addToCart({...item, productId, quantity, total}));
            swal({
                title: "Product:",
                icon: item.img,
                text: `${quantity} of ${item.title} Addedd to Cart!`,
            });
        } else {
            swal("Error!", "User must login!", "error");
            window.location.href = '/login';
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
    }
    return (
        <>
            <Slider {...settings}>
                {flashDealProducts?.map((item, ind) => {
                    return (
                        <div className="box" key={ind} style={{flexDirection: 'column'}}>
                            <div className="product mtop">
                                <div className="img">
                                    <span className="discount">{70} % off</span>
                                    <img src={item.img} alt="img" />
                                    <div className="product-like">
                                        <label>{count}</label><br/>
                                        <FavoriteBorderIcon onClick={increment} />
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3>{item.title}</h3>
                                    <div className="rate">
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <GradeIcon />
                                        <span>(3 Reviews)</span>
                                    </div>
                                    <div className="price">
                                        <h4>${item.price}.00</h4>
                                        <div className="button">
                                            <Link to={`/product/${item.slug}`}><button><VisibilityIcon /></button></Link>
                                            <button onClick={() => handleClick(item)}><ShoppingCartIcon /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
};

export default FlashCard;

// const FlashCard = ({ flashDealProducts, addToCart }) => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 } 
//             },
//             {
//                 breakpoint: 400,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 } 
//             }
//         ]
//     }
//     return (
//         <>
//             <Slider {...settings}>
//                 {flashDealProducts?.map((pro, ind) => {
//                     return (
//                         <div className="box" key={ind} style={{flexDirection: 'column'}}>
//                             <div className="product mtop">
//                                 <div className="img">
//                                     <span className="discount">{70} % off</span>
//                                     <img src={pro.img} alt="img" />
//                                     <div className="product-like">
//                                         <label>{count}</label><br/>
//                                         <FavoriteBorderIcon onClick={increment} />
//                                     </div>
//                                 </div>
//                                 <div className="product-details">
//                                     <h3>{pro.title}</h3>
//                                     <div className="rate">
//                                         <GradeIcon />
//                                         <GradeIcon />
//                                         <GradeIcon />
//                                         <GradeIcon />
//                                         <span>(3 Reviews)</span>
//                                     </div>
//                                     <div className="price">
//                                         <h4>${pro.price}.00</h4>
//                                         <div className="button">
//                                             <Link to={`/shop/${pro._id}`}><button><VisibilityIcon /></button></Link>
//                                             <button onClick={() => addToCart(pro)}><ShoppingCartIcon /></button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </Slider>
//         </>
//     )
// };

// export default FlashCard;
