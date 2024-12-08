import React , {useState} from 'react'
import pinkLogo from '../Assests/CatCafe_logo_sonder_teks.png'
import '../CSS/Navbar.css'
import '../CSS/General.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [toggleBar , setToggleBar] = useState(false);

  
  return (
    <div id='navbar'>
    
        <div>
          <img src={pinkLogo} alt="" />
        </div>
        <div id='links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="">Bookings</a></li>
            <li><Link to='/CatsAll'>Cats</Link></li>
            <li><a href="">About Us</a></li>
          </ul>
          
        </div>

        <div id='slbuttons'>
          <Link to='/SignUp'><button id='sign'>Sign Up</button></Link>
          <Link to='/Login'><button id='login'>Login</button></Link>
        </div>


        <div id='faBars' onClick={() => {setToggleBar(!toggleBar)}}>
          <FontAwesomeIcon icon={faBars} style={{height:"2rem" ,marginRight:"3rem"}}/>
          
        </div>

        <nav id='faBarsLink' style={{display: toggleBar ? 'block' : 'none'}}>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><a href="">Bookings</a></li>
            <li><Link to='/CatsAll'>Cats</Link></li>
            <li><a href="">About Us</a></li>
            </ul>
          </nav>
        
    </div>

  )
}

export default Navbar