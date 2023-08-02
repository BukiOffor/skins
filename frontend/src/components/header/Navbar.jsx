import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container d-flex">
                    <div className='categories d-flex'>
                        <span><BorderAllIcon /></span>
                        <h4>Categories</h4>
                        <span><ExpandMoreIcon className='ico' /></span>
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-mobileMenu" : "link f-flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/products'>Shop</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Contact</Link></li>
                            <li><Link to='/'>Blog</Link></li>
                        </ul>
                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {MobileMenu ? <span className='close home-btn'><CloseIcon /></span> : <span className='open'><MenuIcon /></span>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
