import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import { WiStars } from "react-icons/wi";
import { CiSearch, CiUser } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";



function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-text">
        <h3>The Ethereal Marketplace</h3>
        <p>© 2024 The Ethereal Marketplace. Curated with intention.</p>
      </div>
      <ul className="footer-ul">
        <li><Link className='footer-link' to="/">SUSTAINABILITY</Link></li>
        <li><Link className='footer-link' to="/">SHIPPING</Link></li>
        <li><Link className='footer-link' to="/">RETURNS</Link></li>
        <li><Link className='footer-link' to="/">PRIVACY</Link></li>
        <li><Link className='footer-link' to="/">JOURNAL</Link></li>
      </ul>
      <div className="footer-icons">
        <Link to="/" className="footer-icon"><WiStars /> Curated</Link>
        <Link to="/categories" className="footer-icon"><CiSearch />Search</Link>
        <Link to="/products" className="footer-icon"><MdOutlineShoppingBag />Bag</Link>
        <Link to="" className="footer-icon"><CiUser />Profile</Link>
      </div>
    </footer>
  )
}

export default Footer