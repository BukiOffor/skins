import "./style.css";
import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import AppleIcon from '@mui/icons-material/Apple';
import PhoneIcon from '@mui/icons-material/Phone';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container grid-2'>
                    <div className="box">
                        <h1>Wolmart</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believeable.</p>
                        <div className='icon d-flex'>
                            <div className='img d-flex'>
                                <GoogleIcon />
                                <span>Google Play</span>
                            </div>
                            <div className='img d-flex'>
                                <AppleIcon />
                                <span>App Store</span>
                            </div>
                        </div>
                    </div>
                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center </li>
                            <li>How to Buy </li>
                            <li>Track Your Order </li>
                            <li>Corporate & Bulk Purchasing </li>
                            <li>Returns & Refunds </li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h2>Contact Us</h2>
                        <ul>
                            <li className='f-flex'>
                                <LocationOnIcon />4, Taiwo Road, Ilorin, Kwara State.
                            </li>
                            <li className='f-flex'>
                                <MailIcon />contact@gmail.com
                            </li>
                            <li className='f-flex'>
                                <PhoneIcon />+2348137635037
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
