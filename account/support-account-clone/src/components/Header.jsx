import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import Hamburger and Close icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle the menu

  return (
    <nav className="header">
      <div className="logo">
        {/* Gatnix */}
        <Link to="/">
          <img src='https://www.gatnix.com/assets/images/gatnix-logo-svg.svg' alt='gatnix' className='gatnix' />
        </Link>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>Home</li>
        <li>Products</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Profiles</li>
        <li>
          <button className="buy-btn">Buy Gatnix</button>
        </li>
      </ul>

      <div className="user-section">
        <Avatar size="large" icon={<UserOutlined />} />
        <div className="user-details">Anjan Yelle</div>
      </div>
    </nav>
  );
};

export default Header;
