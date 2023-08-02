import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart } from '../../context/cartContext/CartActions';
import { CartContext } from '../../context/cartContext/CartContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ShopCard = ({ products }) => {
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
    return (
        <>
            {products?.map((item, ind) => {
                return (
                    <div className="box" key={ind}>
                        <div className="product mtop">
                            <div className="img">
                                <span className="discount">{70} % off</span>
                                <img src={item.img} alt="img" />
                                <div className="product-like">
                                    <label>0</label><br/>
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
        </>
    )
};

export default ShopCard;

// const ShopCard = ({ products, addToCart }) => {
//     const [count, setCount] = useState(0);

//     const increment = () => {
//         setCount(count + 1);
//     };
//     return (
//         <>
//             {products?.map((pro, ind) => {
//                 return (
//                     <div className="box" key={ind}>
//                         <div className="product mtop">
//                             <div className="img">
//                                 <span className="discount">{70} % off</span>
//                                 <img src={pro.img} alt="img" />
//                                 <div className="product-like">
//                                     <label>0</label><br/>
//                                     <FavoriteBorderIcon onClick={increment} />
//                                 </div>
//                             </div>
//                             <div className="product-details">
//                                 <h3>{pro.title}</h3>
//                                 <div className="rate">
//                                     <GradeIcon />
//                                     <GradeIcon />
//                                     <GradeIcon />
//                                     <GradeIcon />
//                                     <span>(3 Reviews)</span>
//                                 </div>
//                                 <div className="price">
//                                     <h4>${pro.price}.00</h4>
//                                     <div className="button">
//                                         <Link to={`/shop/${pro._id}`}><button><VisibilityIcon /></button></Link>
//                                         <button onClick={() => addToCart(pro)}><ShoppingCartIcon /></button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     )
// };

// export default ShopCard;
