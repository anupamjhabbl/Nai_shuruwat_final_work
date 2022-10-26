import React from 'react'
import "./Donate.css";


export default function Donate() {
  return (
   <div className='Donatebody'>
    
    <div  className="formbox">  
        <h2>Money Donation Form</h2>
    
        <div  id="Donateform" >
            
            <div className="sec">
                <div>
                    <label htmlFor="FirstName" >First Name*:</label>
                    <input  className="input_donate"  id="Firstname" placeholder="First Name"/>
                </div>
                <div> 
                    <label htmlFor="LastName" >Last Name*:</label>
                    <input className="input_donate"  required id="LastName"  name="Last Name" type="text" placeholder="Last Name"/>
                </div>

            </div>
            <div className="sec">
                <div>
                    <label htmlFor="phonenumber" >Phone Number*:</label>
                    <input className="input_donate"  required  id="phonenumber1" name="phone number1" type="number" placeholder="xxxxxxxxxx" />
                           
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input  className="input_donate" id="email" name="email" type="email" />
                </div>
            </div>
            <div className="sec">
                <div>
                    <label htmlFor="city"  >City*:</label>
                    <input className="input_donate"  required id="city" name="city" type="text" placeholder="Enter your City"/>
                </div>
                <div>
                    <label htmlFor="pincode"  >Zip Code*:</label>
                    <input className="input_donate"  required id="zip_code" name="zip_code" type="number" placeholder="000000"/>
                </div>
            </div>
    
            <div className="sec">   
    
    
                <div>
                    <label htmlFor="state" >State*:</label>
                    <input  className="input_donate" required id="state" name="state" type="text" placeholder="Enter your State"/>
                </div>
    
    
                
    
    
                <div>
                    <label htmlFor="country"  >Country*:</label>
                    <input  className="input_donate" required id="country" name="country" type="text" placeholder="  Enter your Country"/>
                </div>

            </div>
            <div className="sec">
                <div>
                    <label htmlFor="amountinfigures"  >Amount in figures*(in Rs):</label>
                    <div><input  className="input_donate" required  id="amountinfigures" name="amountinfigures" type="number" placeholder="  Figures"/></div>
                </div>
                <div>
                    <label htmlFor="type">Payment method: </label>
                    <select className="payment_method" name="payment_method" id="type">
                        <option value="card">credit or debit card </option>
                        <option value="UPI">UPI  </option>
                        <option value="Net Banking">Net Banking</option>
                        <option value="PayPal">PayPal</option>
                        <option value="American Express">American Express </option>
                    </select>
                </div>
            </div>
    
            <div className="pay" id="problem">      
                <button id="pay" >Pay Now</button>
            </div>

               
        </div>
        

        
    </div>


</div>

  )
}
