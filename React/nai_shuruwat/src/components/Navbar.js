import React from "react";
import{Link} from "react-router-dom";
import './Navbar.css';
import Logo  from './Logo For IWT 1 cropped.jpg';
function Navbar() {
    return (
          <div id="navbars" className="navbars"> 
                <div id="logo">
                    <img src={Logo} alt="Nai Shuruwat"/>
                    <p>Nai shurwat</p>
                   </div>
                <ul id="navlinks">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/reach">Our Reach</Link></li>
                    <li><Link to="/Volunteer">Join Us</Link></li>
                    <li><Link to ="/Donate">Donate</Link></li>
                    <li><Link to ="/faq">Questions</Link></li>
                    <li><Link to ="/Help">Help</Link></li>
  
                </ul>
          </div>
    );
  }

  export default Navbar;