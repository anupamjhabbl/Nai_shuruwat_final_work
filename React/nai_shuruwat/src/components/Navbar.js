import React from "react";
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="About Us">About Us</a></li>
                    <li><a href="World_Reach.html">Our Reach</a></li>
                    <li><a href="volunteer_form.html">Join Us</a></li>
                    <li><a href="donate.html">Donate</a></li>
                    <li><a href="faq (2).html">Questions</a></li>
                    <li><a href="help.html">Help</a></li>
  
                </ul>
          </div>
    );
  }

  export default Navbar;