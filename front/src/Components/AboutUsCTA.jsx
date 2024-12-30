import React from 'react'
import { Link } from 'react-router-dom'
import girl from '../Assests/Rochelle1.jpg'
import '../CSS/CTA.css'
import '../CSS/AboutUsCTA.css'


function AboutUsCTA() {
  return (
    <div className='CTA' id='AboutUs'>
        <div className='leftbox'>
            <div>
                <h1>About Us</h1>
                <h2>Owner: Rochelle du Toit</h2>
            </div>

           
          
            <p>
                Welcome to Rochelle’s Cat Café! Here, cats and coffee come together to create the ultimate cozy escape.  
                <br />
                Our café offers a warm space to relax, sip on delicious drinks, and connect with adorable, adoptable cats from local shelters.
                <br /> 
                Whether you’re here for a quiet moment or to find your purr-fect match, every visit helps support our furry friends. 
                <br /> 
                Join us for coffee, cuddles, and community. Happiness is just a whisker away at Rochelle’s Cat Café!              
            </p>

            <Link to='/CatsAll'><button>Our Cats</button></Link>
            

        </div>
        <div className='rightbox'>
            <img src={girl} alt="" />
        </div>
    </div>
  )
}

export default AboutUsCTA