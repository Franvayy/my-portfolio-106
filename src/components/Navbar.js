import React from 'react';

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <img src="/nav-logo.png" alt="FLSAYCON Logo" />
      </a>

      <nav>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Navbar;