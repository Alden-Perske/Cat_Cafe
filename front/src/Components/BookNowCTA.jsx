import React from 'react'
import { Link } from 'react-router-dom'
import WitLogo from '../Assests/CatCafe_logo_wit.png'
import '../CSS/CTA.css'
import '../CSS/BookNowCTA.css'
import '../CSS/General.css'



function BookNowCTA() {
  return (
    <div className='CTA' id='BookNow'>
        <div className='leftbox'>
            <div>
                <h1>We help homeless cats find a home</h1>
                <h2>And sell coffee on the side</h2>
            </div>
            

            <p>
            You make a booking to come visit,  
<br />
and immerse yourself in the cozy atmosphere of our café, where the scent of freshly brewed coffee fills the air and the company of our friendly felines brings warmth to your heart.  

<br />
As you spend time with our cats, you may just find yourself falling in love with one of them. We hope that you’ll consider adopting one of our lovable feline friends, who are in need of a forever home.  
 
<br />
Make a booking today to meet your newest family member and make a difference in the life of a cat in need. We can’t wait to welcome you to *Rochelle’s Cat Café* and help you find the perfect companion!
            </p>

            <Link to='/Bookings'><button>Book Now</button></Link>
            


        </div>
        <div className='rightbox'>
            <img src={WitLogo} alt="" />
        </div>
    </div>
  )
}

export default BookNowCTA