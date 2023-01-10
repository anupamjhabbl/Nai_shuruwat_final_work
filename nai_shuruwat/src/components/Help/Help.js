import React from "react";
import './help.css';


class Help extends React.Component{
    render(){
        return (
            <>
            <div className="form">
                <form action="/form" method="GET">
    
                    <h2 >You need help? Fill the form or Contact us</h2>
                    <div id="helpform" >
                        
                        <div className="name" >
                            <div className="f_name">
                                <label className="label_help" htmlFor="f_name">*First Name &nbsp; </label>
                                <input className="input_help" type="text" id="f_name" name="f_name" required/>
    
                            </div>
                            <div className="l_name">
                                <label className="label_help" htmlFor="l_name">Last Name &nbsp; </label>
                                <input className="input_help" type="text" id="l_name" name="l_name"/>
    
                            </div>
                            
    
                        </div>
                        
                        <div className="email">
                            <label className="label_help" htmlFor="email">*Email &nbsp; </label>
                            <input className="input_help" type="email" id="email" name="email" required/>
                        </div>
                        
                        <div className="phone">
                            <label className="label_help" htmlFor="phone1">*Phone &nbsp; </label>
                            <input className="input_help phone_no" type="text" id="phone1" name="phone" required/>
                        </div>
                            
    
                       
                        
                        <div className="name">
                            <div className="house">
                                <label className="label_help" htmlFor="house">House No &nbsp; </label>
                                <input className="input_help" type="text" id="house" name="house" placeholder="RZ-304" />
                            </div>
                            <div className="city">
                                <label className="label_help" htmlFor="city">City &nbsp; </label>
                                <input className="input_help" type="text" id="city" name="city" placeholder="New-Delhi"/>
                            </div>
    
                        </div>
                        
                        <div className="name">
                            <div className="state">
                                <label className="label_help" htmlFor="state">State &nbsp; </label>
                                <input className="input_help" type="text" id="state" name="state" placeholder="Delhi"/>
                            </div>
                            <div className="PinCode">
                                <label className="label_help" htmlFor="Pin-Code">Pin-Code &nbsp; </label>
                                <input className="input_help " type="number" id="PinCode" name="Pincode" placeholder="100023"/>
                            </div>
    
                        </div>
                        <div>
                            <label className="label_help" htmlFor="text">How can we help you? </label>
                            <textarea name="message" id="text" cols="49" rows="7" required></textarea>
                        </div>
                        <div>
                            <button className="help_submit" type="submit">Submit</button> 
                        </div>
                        
    
                    </div>
                </form>   
                            
            </div>
            </>
        )
    }
    
}
export default Help;