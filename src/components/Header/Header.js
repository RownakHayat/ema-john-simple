import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../contexts/UserContexts';
const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
               { user?.uid ? 
               <button className='btn_logout' onClick={logOut}>Logout</button>
               
               :
                 <>
                 <Link to='/login'>Login</Link>
                 <Link to='/signup'>Signup</Link>
                 </>
               }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;
