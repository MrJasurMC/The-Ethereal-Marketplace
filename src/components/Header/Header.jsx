import "./Header.css"
import { Link } from 'react-router-dom';
import { CiSearch, CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

function Header({onSearchChange}) {
  return (
    <header className='header'>
      <MdMenu className="header-hamburger" />
      <Link to="/" className="header-logo">
        <span className="logo-full">The Ethereal Marketplace</span>
        <span className="logo-short">The Curator</span>
      </Link>
      <nav className='header-nav'>
        <ul className="header-ul">
          <li><Link className='header-link' to="/">CURATION</Link></li>
          <li><Link className='header-link' to="/categories">LIVING</Link></li>
          <li><Link className='header-link' to="/products">APPAREL</Link></li>
          <li><Link className='header-link' to="/">ARTISANS</Link></li>
        </ul>
      </nav>
      <div className="header-inputs">
        <div className="header-input">
          <input type="text" placeholder='Search the collection...' onChange={(e) => onSearchChange(e.target.value)} />
          <CiSearch />
        </div>
        <BsCart3 className='header-icons'/>
        <CiUser className='header-icons'/>
      </div>
    </header>
  )
}

export default Header