import React from 'react'

function navbar() {
    return (
        
        <nav class="navbar">
          <div class="inner-width">
            <a href="home" class="logo"></a>
            <button class="menu-toggler">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div class="navbar-menu">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#education">Education</a>
              <a href="#works">Works</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
    );
}

export default navbar;
