import React from 'react'
import './volunteer_form.css';
import Navbar from '../Navbar.js';
import logo from './Logo For IWT 1 cropped.jpg';
export default function Volunteer_form() {
  return (
    <>
        <div className="body">
            <div className="section">
                <div className="logo">
                    <img src={logo} alt="Feed People" height={100} width={100} style={{borderRadius:"50%"}}/>
                </div>
                <div>

                <h2>Join Us</h2>
                <p>Join us, <i><b>The New Shuruwat </b></i>is a community which provides a plateform to help the poor people,To feed the needy and give education to the poor childrens.
                    After filling this form You will also be a member of <b><i>The New Shuruat.</i></b>
                </p>
                <p style={{fontSize:"1.1em"}} >Already have an account,then <a className="unique"  href="login_form.html" style={ {color:"blue",fontWeight: "700"}} >log in</a></p>
                
                </div>

            </div>

            
            <div>{/* USED THIS INSTEAD OF FORM BECAUSE WE MAY NOT USE FORM IN REACT     */}
                
                <div>
                    <label className="label" htmlFor="name1">First Name*</label>
                
                    <input className="input" name="First Name" id="name1" type="text" required/>
                </div>
 
                <div>
                    <label className="label" htmlFor="name2">Last Name*</label>
                    <input className="input" name="Last Name" id="name2" type="text" required/>
                </div>
                <div>
                    <label htmlFor="gender">Gender*:</label>
                    Male <input type="radio" id="gender" name="gender" checked/> &nbsp; Female <input type="radio" id="gender" name="gender"/ > &nbsp; Other <input type="radio" id="gender" name="gender" />

                </div>
                <div>
                    <label className="label" htmlFor="age">Age*:</label>
                    <select className="input" name="Age" id="age">
                        <option value="blank"></option>
                        <option value=">18">{">"}18</option>
                        <option value=">=18">{">"}=18</option>
                        <option value=">=30">{">"}=30</option>
                        <option value=">=40">{">"}=40</option>
                        <option value=">=50">{">"}=50</option>
                        <option value=">=60">{">"}=60</option>
                        <option value=">60">{">"}60</option>
                    </select>

                </div>
                 
            
                <div>
                    <h3>Address</h3>

                
                    <div>
                        <label className="label" htmlFor="Home Number">Home Number*</label>
                        <input className="input" id="Home Number" type="text" required/>
                    </div>
                    <div>
                        <label className="label" htmlFor="City">City*</label>
                        <input className="input" name="City"id="City" type="text" required/>

                    </div>
                    <div>
                        <label className="label" htmlFor="State">State*</label>
                        <input name="State" className="input" id="State" type="text" required/>

                    </div>
                 

                    <div>
                        <label className="label" htmlFor="Pin-code">Pin-Code*</label>
                        <input className="input" name="Pin-Code" id="PinCode" type="number" required/>

                    </div>

                    
                </div> 
                
                  
                <div>
                    <label className="label" htmlFor="Contact Number1">Contact Number*</label>
                    <input  className="input" name="Contact Number1"  id="Contact Number1" type="number"  required/> 
                </div>
                
                <div>
                    <label className="label" htmlFor="Email">Email*</label>
                    <input className="input"id="Email" name="Email" type="email" placeholder="abc@gmail.com" required/>
                </div>
                
                 
        
            
                <div>
                    <label className="label" htmlFor="Date">Date*</label>
                    <input  className="input"  name="Date" id="Date" type="date" placeholder="XX-XX-XXXX" required/> 
                </div>
            
                <br/>
                <div className="interest">
                    <div>
                        <b>Interested in Volunteering at</b><br/>
                        <input name="Interested at"  id="School"  type="radio"/> 
                        <label htmlFor="School" >School</label><br/>
                    
                        <input name="Interested at" id="Parish" type="radio"/> 
                        <label htmlFor="Parish">Parish</label><br/>
                    
                        <input name="Interested at" id="Agency" type="radio"/> 
                        <label htmlFor="Agency">Agency</label><br/>
    
                        <input name="Interested at" id="Others at" type="radio"/> 
                        <label htmlFor="Others at">Others</label><br/>
                    
                    </div>
                    <div>
                        <b>Available</b><br/>
                        <input name="Interested for"  id="Morning"  type="radio"/> 
                        <label htmlFor="Morning" >Morning</label><br/>
                    
                        <input name="Interested for" id="Weekends" type="radio"/> 
                        <label htmlFor="Weekends">Weekends</label><br/>
                    
                        <input name="Interested for" id="Week Days" type="radio"/> 
                        <label htmlFor="Week Days">Week Days</label><br/>
    
                        <input name="Interested for" id="Afternoon" type="radio"/> 
                        <label htmlFor="Afternoon">Afternoon</label><br/>
    
                        <input name="Interested for" id="Evening" type="radio"/> 
                        <label htmlFor="Evening">Eveniing</label><br/>
    
                    </div>

                </div>
                
                <br/>
                <div>
                    <b>Interested in Volunteering for</b><br/>
                    <input name="Interested for"  id="School Activities"  type="checkbox"/> 
                    <label htmlFor="School Activities" >School Activities</label><br/>
                
                    <input name="Interested for" id="Religious Education" type="checkbox"/> 
                    <label htmlFor="Religious Education">Religious Education</label><br/>
                
                    <input name="Interested for" id="Youth Ministery" type="checkbox"/> 
                    <label htmlFor="Youth Ministery">Youth Ministery</label><br/>

                    <input name="Interested for" id="Coaching" type="checkbox"/> 
                    <label htmlFor="Coaching">Coaching</label><br/>

                    <input name="Interested for" id="Others for" type="checkbox"/> 
                    <label htmlFor="Others for">Others</label><br/>
                </div>
                
                    <br/>
            
                <div>
                    <b><label  className="label" htmlFor="why" >Why you want to join this Organisation ?</label></b><br/>
                    <textarea id="why" name= "experience" rows="10" cols="80"></textarea>
                </div>
                {/* <input type="submit" value="Submit"/> */}
                <button>Submit</button>

            </div>
        </div>
    </>
  )
}
