import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext/UserContext';
import './Header.css';

const Header = () => {
    const auth = useContext(AuthContext);
    const {user , signOutEmail} = auth;
   
 const logoutBtn = () => {
    signOutEmail()
    .then((result => {
        console.log('logout')
    }))
    .catch((error) => {console.log(error)})
 }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Register</Link> 
                <Link to="/login">Login</Link>
                {user}
               <button onClick= {logoutBtn}>Logout</button>
               {/* {name ? <span> <Link to="/register">Register</Link> 
                <Link to="/login">Login</Link></span> : 'signout'} */}
                
                
            </div>
        </nav>
    );
};

export default Header;