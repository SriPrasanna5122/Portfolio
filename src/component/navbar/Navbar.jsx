import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {
  const [activeSec, setActive] = useState('home');
  const [menuOpen, setMenu] = useState(false);

  function handleClick(navElement) {
    setActive(navElement);
    setMenu(false); 
    props.currentLocation(navElement);
  }

  function handleHamburgerClick() {
    setMenu((prev) => !prev); 
  }

  return (
    <div className="navbar">
      <h1>Portfolio</h1>
      <div className='hamburger' onClick={handleHamburgerClick}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-content ${menuOpen ? 'active' : ''}`}>
        <a className={activeSec === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Home</a>
        <a className={activeSec === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>About me</a>
        <a className={activeSec === 'skill' ? 'active' : ''} onClick={() => handleClick('skill')}>Skill</a>
        <a className={activeSec === 'project' ? 'active' : ''} onClick={() => handleClick('project')}>Project</a>
        <a className={activeSec === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
