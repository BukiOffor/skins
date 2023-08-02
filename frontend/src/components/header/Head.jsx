import { Link, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { logout } from '../../context/authContext/apiCall';
import { AuthContext } from '../../context/authContext/AuthContext';

const Head = () => {
    const { user, dispatch } = useContext(AuthContext);
    const handleLogout = () => {
        logout(dispatch);
        Navigate('/login');
    };

    return (
        <>
            <section className='head'>
                <div className='container d-flex'>
                    <div className='left'>
                        <div className="cont d-flex">
                            <PhoneIcon />
                            <label>+234 8137635037</label>
                        </div>
                        <div className="cont d-flex">
                            <MailIcon />
                            <label>support@gmail.com</label>
                        </div>
                    </div>
                    <div className='right RText'>
                        {user ? (
                            <>
                                <label><Link to='http://localhost:3001/'>My Account</Link></label>
                                <label><Link to='#' onClick={handleLogout}>Logout</Link></label>
                            </>
                        ) : (
                            <>
                                <label><Link to='/login'>Sign</Link></label>
                                <label><Link to='/register'>Register</Link></label>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Head;
