import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/SignUp.css'
import '../CSS/General.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin =  async(email , password) => {
    if(email === "" || password === ""){
      return window.alert("All fields must be filled in.")

    }

    try {
    const res = await fetch('http://localhost:5000/user/login' , {
      method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),

    })

    if(!res.ok){
      const err = await res.json();
      window.alert(`Error: ${err.message}`)
    }

    const data = await res.json();
      window.alert(`User Logged in!!!`);
      localStorage.setItem('token',data.token)
      setEmail('')
      setPassword('')
      
    } catch (err) {
      console.error("There was an error" , err);
    }
  }

  return (
    <div id='background'>


      <div id='SignUpForm'>

        <div className='FormText'>
          <h1>Login</h1>

          <label className='labels'>Email</label>
          <br />
          <input type="text" className='inputs' value={email} onChange={e => setEmail(e.target.value)} />
          <br />

          <label className='labels'>Password:</label>
          <br />
          <input type="password" className='inputs' value={password} onChange={e => setPassword(e.target.value)} />
          <br />

          <p>Don't have a 
            <br />account?<Link to='/SignUp'><button className='blink'>Sign Up</button></Link></p>


          <button className='abutton' onClick={() => handleLogin(email,password)} >Login</button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm