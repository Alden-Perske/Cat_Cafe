import React from 'react'
import '../CSS/Footer.css'
import '../CSS/General.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebook } from "@fortawesome/free-brands-svg-icons";



function Footer() {
  return (

    <div id='footer'>
        <h1>Contact info:</h1>
        <div id='footerInner'>
        <div id='footerTeks'>
            
            <h3><strong>Phone number: </strong><a href="tel:+27 00 000 0000">000 000 0000</a></h3>
            <h3><strong>Email: </strong><a href="mailto:fake@gmail.com">fake@gmail.com</a></h3>
                   
          
        </div>

        <div id='footerIcons'> 
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
        </div>

        </div>
        
        
    </div>
    
  )
}

export default Footer