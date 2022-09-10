import React from "react";
import './social.css';


function Social(){
    return (
        <div id="social" className="social">
            <div className="socialbox" style={{backgroundColor:'blue'}}>
                <a href="#"><i className="fab fa-facebook-f"></i><span>Facebook</span></a>
            </div>
            <div className="socialbox" style={{backgroundColor:"rgb(242, 14, 105)"}}>
                <a href="#"><i className="fab fa-instagram"></i><span>Instagram</span></a>
            </div>
            <div className="socialbox" style={{backgroundColor:'rgb(102, 178, 228)'}}>
                <a href="#"><i className="fab fa-twitter"></i><span>Twitter</span></a>
            </div>
            <div className="socialbox" style={{backgroundColor:'rgb(10, 102, 194)'}}>
                <a href="#"><i className="fab fa-linkedin-in"></i><span>Linkeden</span></a>
            </div>
            <div className="socialbox" style={{backgroundColor:'red'}}>
                <a href="#"><i className="fab fa-youtube"></i><span>Youtube</span></a>
            </div>

            
            
            
        </div>
    );
}

export default Social;