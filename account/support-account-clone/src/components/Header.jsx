import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown visibility
  const location = useLocation(); // Get the current location for route tracking

  const toggleMenu = () => setMenuOpen(!menuOpen); // Function to toggle the menu
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen); // Function to toggle dropdown

  // Google Analytics initialization
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8312L1F2NK';
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-8312L1F2NK');
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Track route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-8312L1F2NK', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  const handleMenuClick = (menuName) => {
    if (window.gtag) {
      window.gtag('event', 'menu_click', {
        menu_name: menuName,
        event_category: 'Navigation',
        event_label: menuName,
      });
    }
  };

  return (
    <nav className="header">
      <div className="logo">
        <Link to="/" onClick={() => handleMenuClick('Home')}>
          <img src="https://www.gatnix.com/assets/images/gatnix-logo-svg.svg" alt="gatnix" className="gatnix" />
        </Link>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger hamburger11" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <ul className={`nav-links navlink11 ${menuOpen ? 'active' : ''}`}>
        <li onClick={() => handleMenuClick('Home')}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`dropdown ${dropdownOpen ? 'open' : ''}`}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={toggleDropdown}
        >
          <Link to="/products">Products</Link>
          <ul className="dropdown-menu">
            <li onClick={() => handleMenuClick('SAT Individuals')}>
              <a href="https://www.gatnix.com/sat/individual" target="_blank" rel="noopener noreferrer">
                SAT-INDIVIDUALS
              </a>
            </li>
            <li onClick={() => handleMenuClick('SAT Employers')}>
              <a href="https://www.gatnix.com/sat/employer" target="_blank" rel="noopener noreferrer">
                SAT-EMPLOYERS
              </a>
            </li>
            <li onClick={() => handleMenuClick('ATS Recruiters')}>
              <a href="https://www.gatnix.com/sat/recruiter" target="_blank" rel="noopener noreferrer">
                ATS-RECRUITERS
              </a>
            </li>
            <li onClick={() => handleMenuClick('Resume Analyzer')}>
              <a href="https://www.gatnix.com/resume/resume-analyzer" target="_blank" rel="noopener noreferrer">
                RESUME ANALYZER
              </a>
            </li>
            <li onClick={() => handleMenuClick('AI Resume Builder')}>
              <a href="https://www.gatnix.com/resume/ai-resume-builder" target="_blank" rel="noopener noreferrer">
                AI RESUME BUILDER
              </a>
            </li>
            <li onClick={() => handleMenuClick('AI Resume Matcher')}>
              <a href="https://www.gatnix.com/resume/resume-matcher" target="_blank" rel="noopener noreferrer">
                AI RESUME MATCHER
              </a>
            </li>
            <li onClick={() => handleMenuClick('Timesheets')}>
              <a href="https://timesheet.gatnix.com/" target="_blank" rel="noopener noreferrer">
                TIMESHEETS
              </a>
            </li>
          </ul>
        </li>
        <li onClick={() => handleMenuClick('Blog')}>
          <a target="_blank" rel="noopener noreferrer" to="https://www.gatnix.com/blog">Blog</a>
        </li>
        <li onClick={() => handleMenuClick('Contact Us')}>
          <a href="https://www.gatnix.com/contact" target='_blank'>Contact Us</a>
        </li>
        <li onClick={() => handleMenuClick('Profiles')}>
        <a href="https://www.gatnix.com/profile" target='_blank'>Profiles</a>
        </li>
        <li onClick={() => handleMenuClick('Buy Gatnix')}>
          <a href='https://www.gatnix.com/home' target='_blank' >
          <button className="buy-btn">Buy Gatnix</button>
          </a>
        </li>
      </ul>

      <div className="user-section">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </nav>
  );
};

export default Header;
