import React from 'react'
import './volunteer_form.css';

import logo from '../Logo For IWT 1 cropped.jpg';
class Volunteer_form extends React.Component{
    render(){
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

                    
                    <form action="/volunteer_form" method="GET" id="form">
                        
                        <div>
                            <label className="label" htmlFor="name1">First Name*</label>
                            <input className="input" name="f_name" id="name1" type="text" required/>
                        </div>
        
                        <div>
                            <label className="label" htmlFor="name2">Last Name*</label>
                            <input className="input" name="l_name" id="name2" type="text" required/>
                        </div>
                        <div>
                            <label htmlFor="gender">Gender*:</label>
                            Male <input type="radio" id="gender" name="gender" value="male"/> &nbsp; Female <input type="radio" id="gender" value="female" name="gender"/ > &nbsp; Other <input type="radio" id="gender" name="gender" />

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
                                <input className="input" id="Home Number" name="Home_number" type="text" />
                            </div>
                            <div>
                                <label className="label" htmlFor="City">City*</label>
                                <input className="input" name="City" id="City" type="text" required/>

                            </div>
                            <div>
                                <label className="label" htmlFor="State">State*</label>
                                <input name="State" className="input" id="State" type="text" required/>

                            </div>
                        

                            <div>
                                <label className="label" htmlFor="Pin-code">Pin-Code*</label>
                                <input className="input" name="Pincode" id="PinCode" type="number" required/>

                            </div>

                            
                        </div> 
                        
                        
                        <div>
                            <label className="label" htmlFor="Contact Number1">Contact Number*</label>
                            <input  className="input" name="Contact_number"  id="Contact Number1" type="text"  required/> 
                        </div>
                        
                        <div>
                            <label className="label" htmlFor="Email">Email*</label>
                            <input className="input"id="Email" name="Email" type="email" placeholder="abc@gmail.com" required/>
                        </div>
                        
                        
                
                    
                        <div>
                            <label className="label" htmlFor="Date">Date*</label>
                            <input  className="input"  name="Date" id="Date" type="date" placeholder="DD-MM-YYYY" required/> 
                        </div>
                    
                        <br/>
                        <div className="interest">
                            <div>
                                <b>Interested in Volunteering at</b><br/>
                                <input name="Interested_at"  id="School"  type="radio" value="School"/> 
                                <label htmlFor="School" >School</label><br/>
                            
                                <input name="Interested_at" id="Parish" type="radio" value="Parish"/> 
                                <label htmlFor="Parish">Parish</label><br/>
                            
                                <input name="Interested_at" id="Agency" type="radio" value="Agency"/> 
                                <label htmlFor="Agency">Agency</label><br/>
            
                                <input name="Interested_at" id="Others at" value="Others" type="radio"/> 
                                <label htmlFor="Others at">Others</label><br/>
                            
                            </div>
                            <div>
                                <b>Available</b><br/>
                                <input name="Available_at"  id="Morning" value="Morning"   type="radio"/> 
                                <label htmlFor="Morning" >Morning</label><br/>
                            
                                <input name="Available_at" id="Weekends" value="Weekends" type="radio"/> 
                                <label htmlFor="Weekends">Weekends</label><br/>
                            
                                <input name="Available_at" id="Week Days" value="Week_days" type="radio"/> 
                                <label htmlFor="Week Days">Week Days</label><br/>
            
                                <input name="Available_at" id="Afternoon" value="Afternoon" type="radio"/> 
                                <label htmlFor="Afternoon">Afternoon</label><br/>
            
                                <input name="Available_at" id="Evening" value="Evening" type="radio"/> 
                                <label htmlFor="Evening">Eveniing</label><br/>
            
                            </div>

                        </div>
                        
                        <br/>
                        <div>
                            <b>Interested in Volunteering for</b><br/>
                            <input name="Interested_for"  id="School Activities" value="School Activities"  type="radio"/> 
                            <label htmlFor="School Activities" >School Activities</label><br/>
                        
                            <input name="Interested_for" id="Religious Education" value="Religious Education" type="radio"/> 
                            <label htmlFor="Religious Education">Religious Education</label><br/>
                        
                            <input name="Interested_for" id="Youth Ministery" value="Youth Ministery" type="radio"/> 
                            <label htmlFor="Youth Ministery">Youth Ministery</label><br/>

                            <input name="Interested_for" id="Coaching" value="Coaching" type="radio"/> 
                            <label htmlFor="Coaching">Coaching</label><br/>

                            <input name="Interested_for" id="Others for" value="Others"  type="radio"/> 
                            <label htmlFor="Others for">Others</label><br/>
                        </div>
                        
                            <br/>
                    
                        <div>
                            <b><label  className="label" htmlFor="why" >Why you want to join this Organisation ?</label></b><br/>
                            <textarea id="why" name= "experience" rows="10" cols="80"></textarea>
                        </div>
                        {/* <input type="submit" value="Submit"/> */}
                        <button className='volunteer_submit' type="submit">Submit</button>

                    </form>
                </div>
            </>
        )
    }
}

export default Volunteer_form
