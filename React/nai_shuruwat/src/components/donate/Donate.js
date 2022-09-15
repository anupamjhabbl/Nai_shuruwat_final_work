import React from 'react'
import "./Donate.css";


export default function Donate() {
  return (
   <div className='body'>

    <div id="heading1"><h1 >Money Donation Form</h1>  </div>
    
    <div >  
    
        <div  id="form" >
            
            <div className="sec">
                <div>
                    <label htmlFor="FirstName" >First Name*:</label>
                    <input id="Firstname" placeholder="First Name"/>
                </div>
                <div> 
                    <label htmlFor="LastName" >Last Name*:</label>
                    <input required id="LastName"  name="Last Name" type="text" placeholder="Last Name"/>
                </div>

            </div>
            <div className="sec">
                <div>
                    <label htmlFor="phonenumber" >Phone Number*:</label>
                    <input required  id="phonenumber1" name="phone number1" type="number" placeholder="xxxxxxxxxx" />
                           
                </div>
                <div>
                    <label htmlFor="email"  >Email:</label><br/>
                    <div><input id="email" name="email" type="email" placeholder="Enter your Email"/></div>
                </div>
            </div>
            <div className="sec1">
                <div>
                    <label htmlFor="city"  >City*:</label><br/>
                    <div><input required id="city" name="city" type="text" placeholder="Enter your City"/></div>
                </div>
    
    
               
    
    
                <div>
                    <label htmlFor="state" >State*:</label><br/>
                    <div><input required id="state" name="state" type="text" placeholder="Enter your State"/></div>
                </div>
    
    
                
    
    
                <div>
                    <label htmlFor="country"  >Country*:</label><br/>
                    <div><input required id="country" name="country" type="text" placeholder="  Enter your Country"/></div>
                </div>

            </div>
            <div className="sec">
                <div>
                    <label htmlFor="amountinfigures"  >Amount in figures*(in Rs):</label><br/>
                    <div><input required  id="amountinfigures" name="amountinfigures" type="number" placeholder="  Figures"/></div>
                </div>
                <div>
                    <label htmlFor="type">Payment method: </label>
                    <select name="payment_method" id="type">
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
