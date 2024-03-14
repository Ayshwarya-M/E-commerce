import React, { useState, useRef,useEffect } from 'react'
import './Navbar.css'

import logo1 from "../../Images/logo1.png"
import logo2 from "../../Images/logo2.png"
import { Link } from 'react-router-dom'
import nav_dropdown from "../../Images/nav_dropdown.png"
import { useCart } from '../Cartcontext'

const Navbar = () => {
  // let username=sessionStorage.getItem("username")
  const {cart}= useCart();

  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const [username, setUsername] = useState(sessionStorage.getItem('username'));

  
  useEffect(() => {
    setUsername(sessionStorage.getItem('username'));
  }, [username]);

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };
  const handleLogout = () => {
    sessionStorage.removeItem('username');
    setUsername(null);
  };
  const renderAuthButton = () => {
    if (username) {
      // User is logged in
      return (
        <button onClick={handleLogout}>Logout</button>
      );
    } else {
      // User is not logged in
      return (
        <Link to='/login' ><button style={{color:'#ef1b81',border:'#ef1b81'}}>Login</button></Link>
      );
    }
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='shopping-logo' src={logo1} />
        <p style={{color:'#ef1b81'}}>W.</p>Shoppers<p></p>
      </div>
      
      <img className='nav_dropdown'onClick={dropdown_toggle} src={nav_dropdown} />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none',color:'#ef1b81' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("queen") }}><Link style={{ textDecoration: 'none',color:'#ef1b81'}} to='/women'>Queen</Link>{menu === "queen" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("king") }}><Link style={{ textDecoration: 'none',color:'#ef1b81' }} to='/men'>King</Link>{menu === "king" ? <hr /> : <></>}</li>
        {/* <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Princess</Link>{menu === "kids" ? <hr /> : <></>}</li> */}
      </ul>
      <div className='nav-login-cart'>
     
      {renderAuthButton()}
      <h3>{username}</h3>
      
        {/* <Link to='/login'><button>Login</button></Link> */}
        <Link to='/cart' ><img className='trolly-logo' src={logo2} /></Link>
        <div className='nav-cart-count'>{cart.length}</div>
      </div>
    </div>
  )
}

export default Navbar