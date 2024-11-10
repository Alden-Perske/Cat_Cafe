import React from 'react'
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
                You make a booking to come visit , 
                <br />
                drink coffee and hopefully adopt
                <br />
                one of our feline friends in need
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ipsam vero obcaecati! Non voluptatibus atque omnis earum sed obcaecati quos vitae, error illo nihil est minima placeat iusto dolorem possimus.
            </p>

            <button>Book Now</button>


        </div>
        <div className='rightbox'>
            <img src={WitLogo} alt="" />
        </div>
    </div>
  )
}

export default BookNowCTA