import React from 'react'
import "./Question.css";
export const Question = () => {
  return (
    <>
    {/* //Write the code  */}
    <div class="s">
        <div class="leftside">
            <div>
                <img src="pexels-negative-space-33999.jpg" alt=""/>
            </div>
        </div>

        <div class="rightside">
            <details>
                <summary>
                What is the "Nayi Shuruwat" ?
                </summary>
                <p>
                The <b>Nayi Shuruwat</b> is a zero-funds volunteer organization that works to get surplus food from restaurants and communities to serve the less fortunate.<br/>We are largely students and young working professionals – everyone does this in their free time. The lesser fortunate sections of society we serve include homeless families, orphanages, patients from public hospitals and old age homes.
                </p>
            </details>

            <details>
                <summary>
                Does Nayi Shuruwat work in India or others countries too ?
                </summary>
                <p>
                Nayi Shuruwat is a international level development organization with its welfare projects spread across world .   
                </p>
            </details>

            <details>
                <summary>
                How did this start ?
                </summary>
                <p>
                Modeled on the Re-Food program in Portugal, the Nayi Shuruwat started on the streets of Delhi, India in August 2014.  
                </p>
            </details>

            <details>
                <summary>
                So where are you now ?
                </summary>
                <p>
                At last count, we have served 69.5 million people across 227 cities in 12 countries. Still 1% Done.  
                </p>
            </details>

            <details>
                <summary>
                What about funds ?
                </summary>
                <p>
                We have just one rule – we are a zero funds organization. The Nayi Shuruwat has no revenue, employees,
                nor office space – if you want to help, all we need is your time.   
                </p>
            </details>

            <details>
                <summary>
                Wait, i don't get it . How do you grow without money ?
                </summary>
                <p>
                Simple – we are in the business of spreading smiles. We share our experiences on social media. Facebook, Instagram and WhatsApp are our tools to grow.
                Along the way, our extremely passionate members of the press community have helped drive our mission to the world.   
                </p>
            </details>

            <details>
                <summary>
                I like this-how can i help ?
                </summary>
                <p>
                Easy – we need just 3 hours of your week on a regular basis. You can join our team of Nayi Shuruwat or contribute food in your city – you’ll
                find everything you need to know   
                </p>
            </details>

            <details>
                <summary>
                How can i  donate ? 
                </summary>
                <p>
                Thanks for wanting to support us – the Nayi Shuruwat <b>DOES NOT</b> accept money. We have grown through contributions in kind and partnerships.   
                </p>
            </details>

            <details>
                <summary>
                What type of people you serve ?
                </summary>
                <p>
                We currently serve the needy people in:-   
                </p>
                <ul>
                <li>Government Hospitals</li>
               <li>Economically Backward Slums</li>
               <li>Needy Orphanages and Old age homes</li>
               <li>Homeless People</li>
               <li>Shelter Homes</li>
               <li>Rural Communities</li>
                </ul>
            </details>

            <details>
                <summary>
                I don't see my question here-help!
                </summary>
                <p>
                Sorry for the inconvenience but we have a team to take your query, please put your message with some details <a href='/help' >here</a>.   
                </p>
            </details>

        </div>
    </div>
    <div class = "question_form">
        <h2 class="question_head">Write your Question Here</h2>
        <form action="/question_form" method = 'GET'>
            <label htmlFor="question_form_email" class="ques_label" >Email</label>
            <input type="email" id="question_form_email" name="question_form_email" class="question_form_email"/>
            <div class="question_div">
            <label htmlFor="question_form_question" class="ques_label">Your question</label>
            <textarea name="question_form_question" cols="100" rows="10" required class="question_form_question"></textarea>

            </div>
            <button id="question_submit" type="submit">Submit</button>
        </form>
    </div>

    
    </>
  )
}

