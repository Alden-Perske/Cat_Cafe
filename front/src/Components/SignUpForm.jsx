import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/SignUp.css'
import '../CSS/General.css'

function SignUpForm() {
  return (
   
   <>
        <div id='SignUpForm'>

            <div className='FormText'>
                <h1>Sign Up</h1>
        
                <label className='labels'>Email</label>
                <br />
                <input type="text" className='inputs'/>
                <br />
        
                <label className='labels'>Password:</label>
                <br />
                <input type="password" className='inputs' />
                <br />

                <label className='labels'>Confirm password:</label>
                <br />

                <input type="password" className='inputs' />
                <br />
        
                <p>Already a user? <Link to='/Login'><button className='blink'>Login</button></Link></p>
            
        
                <button className='abutton' >Sign Up</button>
                </div>
        </div>
    </>
  )
}

export default SignUpForm