import React from "react";
import './help.css';

function Help(){
    return (
        <>
        <div class="form">


                <div id="helpform" >
                    <div class="name" >
                        <div class="f_name">
                            <label class="label_help" for="f_name">First Name &nbsp; </label>
                            <input class="input_help" type="text" id="f_name" name="f_name" required/>

                        </div>
                        <div class="l_name">
                            <label class="label_help" for="l_name">Last Name &nbsp; </label>
                            <input class="input_help" type="text" id="l_name" name="l_name" required/>

                        </div>
                        

                    </div>
                    
                    <div class="email">
                        <label class="label_help" for="email">Email &nbsp; </label>
                        <input class="input_help" type="email" id="email" name="email" required/>
                    </div>
                    
                    <div class="phone">
                        <label class="label_help" for="phone1">Phone1 &nbsp; </label>
                        <input class="input_help phone_no" type="text" id="phone1" name="phone" required/>
                    </div>
                        

                   
                    
                    <div class="name">
                        <div class="house">
                            <label class="label_help" for="house">House No &nbsp; </label>
                            <input class="input_help" type="text" id="house" name="house" placeholder="RZ-304" />
                        </div>
                        <div class="city">
                            <label class="label_help" for="city">City &nbsp; </label>
                            <input class="input_help" type="text" id="city" name="city" placeholder="New-Delhi"/>
                        </div>

                    </div>
                    
                    <div class="name">
                        <div class="state">
                            <label class="label_help" for="state">State &nbsp; </label>
                            <input class="input_help" type="text" id="state" name="city" placeholder="Delhi"/>
                        </div>
                        <div class="PinCode">
                            <label class="label_help" for="Pin-Code">Pin-Code &nbsp; </label>
                            <input class="input_help " type="number" id="PinCode" name="Pin-Code" placeholder="100023"/>
                        </div>

                    </div>
                    <div>
                        <label class="label_help" for="text">How can we help you? </label>
                        <textarea name="text" id="text" cols="49" rows="7" required></textarea>
                    </div>
                    <div>
                        <button class="help_submit">Submit</button>
                    </div>
                    

                </div>
                
                        
            </div>
        </>
    )
}
export default Help;