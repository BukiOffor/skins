import './product.css';
import swal from 'sweetalert';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from "react-router-dom";
import GradeIcon from '@mui/icons-material/Grade';
import RemoveIcon from '@mui/icons-material/Remove';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState, useEffect, useContext } from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { getProduct } from '../../context/productContext/apiCall';
import { addToCart } from '../../context/cartContext/CartActions';
import { AuthContext } from '../../context/authContext/AuthContext';
import { CartContext } from '../../context/cartContext/CartContext';
import { ProductContext } from '../../context/productContext/ProductContext';

const Product = () => {
    const location = useLocation();
    const [ total, setTotal ] = useState(0);
    const { user } = useContext(AuthContext);
    const slug = location.pathname.split('/')[2];
    const [ quantity, setQuantity ] = useState(0);
    const { product, dispatch } = useContext(ProductContext);
    const { dispatch: cartDispatch } = useContext(CartContext);
    const productId = product?._id;

    // Get Product
    useEffect(() => {
        getProduct(slug, dispatch);
    },[slug, dispatch]);

    // Set Quantity
    const handleQuantity = (type) => {
        if(type === 'dec'){
            quantity > 1 && setQuantity(quantity-1);
            quantity > 1 && setTotal(product.price * (quantity-1))
        } else {
            setQuantity(quantity+1);
            setTotal(product.price * (quantity+1))
        }
    };

    // Update Cart
    const handleClick = () => {
        if(user){
            if(quantity === 0){
                swal("Error!", "Product quantity can not be 0!", "error");
            } else {
                cartDispatch(addToCart({...product, productId, quantity, total}));
                swal({
                    title: "Product:",
                    icon: product.img,
                    text: `${quantity} of ${product.title} Addedd to Cart!`,
                });
            }
        } else {
            swal("Error!", "User must login!", "error");
            window.location.href = '/login';
        }
    }

    return (
        <>
            {product ? (
                <section className="single-product">
                    <div className="container f-flex">
                        <div className="content-left">
                            <img src={product?.img} alt="img" />
                        </div>
                        <div className="content-right">
                            <div className="info-1">
                                <h4>{product?.title}</h4>
                                <p>Category: <span>Phone</span></p>
                                <p className='sku'>PIDN: <span>{product?._id}</span></p>
                            </div>
                            <div className="info-2">
                                <h4>${product?.price}.00</h4>
                                <div className="rate">
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                    <GradeIcon />
                                    <span>(3 Reviews)</span>
                                </div>
                                <p>{product?.desc}</p>
                            </div>
                            <div className="info-3">
                                <div className="addcontainer">
                                    <div className="amountcontainer">
                                        <RemoveIcon onClick={() => handleQuantity('dec')} />
                                        <span className="amount">{quantity}</span>
                                        <AddIcon onClick={() => handleQuantity('inc')} />
                                    </div>
                                    <button onClick={handleClick}>Add to cart</button>
                                </div>
                                <div className="icon f-flex width">
                                    <FacebookIcon className='icon-circle' />
                                    <InstagramIcon className='icon-circle' />
                                    <TwitterIcon className='icon-circle' />
                                    <YouTubeIcon className='icon-circle' />
                                    <PinterestIcon className='icon-circle' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <div>No Product</div>
                // <div style={{
                //     width: "100%",
                //     height: "20vh",
                //     display: 'flex',
                //     alignItems: 'center',
                //     justifyContent: 'center',
                //     background: 'transparent'
                // }}>
                //     <CircularProgress />
                // </div>
            )}
        </>
    )
};

export default Product;
