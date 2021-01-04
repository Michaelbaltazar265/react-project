import './style.css'
import React from "react";

const Header = (props) => {
  return (
      <section className='navbar-section'> 
      <nav className='navbar navbar-expand-sm bg-light'>
          <div className='container'>
              <h1 className='text-center'>87 Lux</h1>
              <h2 className='text-center'> A Modern Digital Agency</h2>
              <ul className="nav navbar-nav navbar-center">
            <li><a href="#home" onClick={ () => props.setView('home') }>Home</a></li>
            <li><a href="#about" onClick={ () => props.setView('about') }>About</a></li>
            <li><a href="#career" onClick={ () => props.setView('career') }>Careers</a></li>
            <li><a href="#contact" onClick={ () => props.setView('contact') }>Contact</a></li>
        </ul>

             
              
          </div>
      </nav>
      </section>
    
  );
};

export default Header;
