import './cart.css';
import swal from 'sweetalert';
import { useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { createCart } from '../../context/cartContext/apiCall';
import { CartContext } from '../../context/cartContext/CartContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../context/cartContext/CartActions';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const { cart, dispatch } = useContext(CartContext);

    // Cart Subtotal
    const arr = cart.map(cat => cat.total)
    let cartSubTotal = 0
    for(let ind = 0; ind < arr.length; ind ++){
        cartSubTotal += arr[ind];
    }
    
    const cartData = {userId: user.data?._id, products: cart, cartTotal: cartSubTotal};

    const handleCheckoutClick = () => {
        if(user){
            createCart(cartData);
            localStorage.setItem('cart', null);
            window.location.href = '/';
        } else {
            swal("Error!", "User must login!", "error");
            window.location.href = '/login';
        }
    }

    return (
        <>
            <section className="cart-items">
                <div className="container d-flex">
                    <div className="cart-details">
                        {cart?.length === 0 && <h1 className='no-item-cart product'>No Item are in Cart</h1>}
                        {cart?.map((item) => {
                            const total = item.price * item.quantity;
                            return (
                                <div className="cart-list product d-flex" key={item._id}>
                                    <div className="img">
                                        <img src={item.img} alt='img' />
                                    </div>
                                    <div className="cart-details">
                                        <h3>{item.title}</h3>
                                        <h4>
                                            {item.price}.00 * {item.quantity}
                                            <span>${total}.00</span>
                                        </h4>
                                    </div>
                                    <div className="cart-items-function">
                                        <div className="remove-cart">
                                            <button
                                                className="remove-cart"
                                                onClick={() => dispatch(removeFromCart(item))}
                                            >
                                                <CloseIcon />
                                            </button>
                                        </div>
                                        <div className="cartControl d-flex">
                                            <button 
                                                className="desCart" 
                                                onClick={() => dispatch(decreaseQuantity(item._id))}
                                            >
                                                <RemoveIcon />
                                            </button>
                                            <button 
                                                className="incCart" 
                                                onClick={() => dispatch(increaseQuantity(item._id))}
                                            >
                                                <AddIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='cart-item-price'></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart-total">
                        <h2>Cart Summary</h2>
                        <div className="d-flex">
                            <h4>Total Price: </h4>
                            <h3>${cartSubTotal}.00</h3>
                        </div>
                        {cart?.length > 0 &&
                            <div className="checkout">
                                <button onClick={handleCheckoutClick}>CheckOut</button>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;

// const Cart = ({ cartItem, addToCart, decreaseQty }) => {
//     const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);

//     return (
//         <>
//             <section className="cart-items">
//                 <div className="container d-flex">
//                     <div className="cart-details">
//                         {cartItem.length === 0 && <h1 className='no-item-cart product'>No Item are in Cart</h1>}
//                         {cartItem.map((item) => {
//                             const productQty = item.price * item.qty;
//                             return (
//                                 <div className="cart-list product d-flex" key={item.id}>
//                                     <div className="img">
//                                         <img src={item.img} alt='img' />
//                                     </div>
//                                     <div className="cart-details">
//                                         <h3>{item.title}</h3>
//                                         <h4>
//                                             {item.price}.00 * {item.qty}
//                                             <span>${productQty}.00</span>
//                                         </h4>
//                                     </div>
//                                     <div className="cart-items-function">
//                                         <div className="remove-cart">
//                                             <button className="remove-cart"><CloseIcon /></button>
//                                         </div>
//                                         <div className="cartControl d-flex">
//                                             <button className="incCart" onClick={() => addToCart(item)}>
//                                                 <AddIcon />
//                                             </button>
//                                             <button className="desCart" onClick={() => decreaseQty(item)}>
//                                                 <RemoveIcon />
//                                             </button>
//                                         </div>
//                                     </div>
//                                     <div className='cart-item-price'></div>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                     <div className="cart-total product">
//                         <h2>Cart Summary</h2>
//                         <div className="d-flex">
//                             <h4>Total Price: </h4>
//                             <h3>${totalPrice}.00</h3>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default Cart;
