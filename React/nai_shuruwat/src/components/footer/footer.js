import React from 'react';
import Infobox from './info_box.js';
import './footer.css';

export default function Footer() {
  return (
    <section id="footer">
        <h2 id="awkward">Our team is here to help</h2>
        <div className="sec1">
            <Infobox 
            name="JEEVESH "
            desc="If you want to know in which areas we are active and any type of area related information you can call him"
            number={9876543210}
            specialisation="Area Specialist"
            email="jeevesh2162.be21@chitkara.edu.in"
            />  

            <Infobox 
            name="HARPREET"
            desc="If you want to know anything about our programs,today's program or others then you can contact him"
            number={9876543210}
            specialisation="Programs Specialist"
            email="harpreet2156.be21@chitkara.edu.in"
            />  

            <Infobox 
            name="AAYUSH"
            desc="If you want to know any thing about our website or if you have any advice for our website please contact him"
            number={9876543210}
            specialisation="Technical Support"
            email="aayush2159.be21@chitkara.edu.in"
            />  

            <Infobox 
            name="ANUPAM"
            desc="If you want to know anything related to our organisation or if you are a media personality and want interview then contact him"
            number={9876543210}
            specialisation="Advisor"
            email="anupam2158.be21@chitkara.edu.in"
            />            
            
            
            
        </div>

    </section>
    

  )
}
