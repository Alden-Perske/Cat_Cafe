import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/SignUp.css'
import '../CSS/General.css'

function LoginForm() {
  return (
    <div id='SignUpForm'>

            <div className='FormText'>
                <h1>Login</h1>
        
                <label className='labels'>Email</label>
                <br />
                <input type="text" className='inputs'/>
                <br />
        
                <label className='labels'>Password:</label>
                <br />
                <input type="password" className='inputs' />
                <br />
        
        
                <p>Don't have a account? <Link to='/SignUp'><button className='blink'>Sign Up</button></Link></p>
            
        
                <button className='abutton' >Login</button>
                </div>
        </div>
  )
}

export default LoginForm