import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../context/cartContext/CartContext';

const Search = () => {
    const { cart } = useContext(CartContext);

    // fixed Header
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <div>
            <section className="search">
                <div className="container c-flex">
                    <div className="logo width">
                        <Link to='/'>
                            <img src={logo} alt='logo' />
                        </Link>
                    </div>
                    <div className="search-box f-flex">
                        <SearchIcon />
                        <input type='text' placeholder='Search and hit enter...' />
                        <span>All Category</span>
                    </div>
                    <div className="icon f-flex width">
                        <PersonIcon className='icon-circle' />
                        <div className="cart">
                            <Link to='/cart'>
                                <ShoppingCartIcon className='icon-circle' />
                                <span>{cart.length === 0 ? '0' : cart.length}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Search;
