import React from 'react'
import pinkLogo from '../Assests/CatCafe_logo_sonder_teks.png'
import '../CSS/Navbar.css'
import '../CSS/General.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id='navbar'>
    
        <div>
          <img src={pinkLogo} alt="" />
        </div>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="">Bookings</a></li>
            <li><Link to='/CatsAll'>Cats</Link></li>
            <li><a href="">About Us</a></li>
          </ul>
          
        </div>

        <div>
          <Link to='/SignUp'><button id='sign'>Sign Up</button></Link>
          <Link to='/Login'><button id='login'>Login</button></Link>
        </div>
    </div>

  )
}

export default Navbar