import React , {useState} from 'react'
import { useEffect } from 'react'
import pinkLogo from '../Assests/CatCafe_logo_sonder_teks.png'
import '../CSS/Navbar.css'
import '../CSS/General.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [toggleBar , setToggleBar] = useState(false);
  const [token,setToken] = useState('')
  const navigate = useNavigate()


  
    useEffect(() => {
      const storedToken = setToken(localStorage.getItem('token'))
      if(storedToken){
        setToken(token)
      }
    } , [])

    const handleSignOut = () => {
      if (window.confirm("Are you sure you want to sign out?")) {
        localStorage.clear()
        setToken("")
        navigate('/')

    } else {
        console.log("User clicked Cancel");
    }}

  
  return (
    <div id='navbar'>
    
        <div>
          <img src={pinkLogo} alt="" />
        </div>
        <div id='links'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Bookings'>Bookings</Link></li>
            <li><Link to='/CatsAll'>Cats</Link></li>
          </ul>
          
        </div>

        <div id='slbuttons'>
          <Link to='/SignUp'><button id='sign'>Sign Up</button></Link>
          {
            token ? (
              <button id='login' onClick={() => {handleSignOut()}}>Sign Out</button>
            )
            :
            (
              <Link to='/Login'><button id='login'>Login</button></Link>
            )
          }
          
        </div>


        <div id='faBars' onClick={() => {setToggleBar(!toggleBar)}}>
          <FontAwesomeIcon icon={faBars} style={{height:"2rem" ,marginRight:"3rem"}}/>
          
        </div>

        <nav id='faBarsLink' style={{display: toggleBar ? 'block' : 'none'}}>
            <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Bookings'>Bookings</Link></li>
            <li><Link to='/CatsAll'>Cats</Link></li>
            <li><FontAwesomeIcon icon={faArrowRight}  onClick={() => {setToggleBar(!toggleBar)}}/></li>
            </ul>
          </nav>
        
    </div>

  )
}

export default Navbar