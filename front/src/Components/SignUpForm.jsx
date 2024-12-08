import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/SignUp.css'
import '../CSS/General.css'

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [suranme, setSurname] = useState('');

  const handleSignUp = async (email, password , confirmPassword , name , surname) =>{

    if(email === '' || password === '' || confirmPassword === '' || name === '' || suranme  === ''){
      return window.alert("All fields must be filled in.")
    }

    if(password !== confirmPassword){
      return window.alert("Password and confirm password must match.")
    }

    try {
      const response = await fetch('http://localhost:5000/user/signup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          confirmPassword:confirmPassword,
          name: name,
          surname: surname,
        }),
      });
  
      // Check if the response status is OK
      if (!response.ok) {
        const errorData = await response.json();
        return window.alert(errorData.error || "An error occurred.");
      }
  
      // Handle success
      const data = await response.json();
      console.log(data.user.USER_NAME)
      window.alert(`User created successfully with name: ${data.user.USER_NAME}`);
    } catch (err) {
      console.error("Error during signup:", err);
      window.alert("A network error occurred.");
    }

  }


  return (

    <>
      <div id='background'>
        <div id='SignUpForm'>

          <div className='FormText'>
            <h1>Sign Up</h1>

            <label className='labels'>Name</label>
            <br />
            <input type="text" className='inputs' required  value={name} onChange={e => setName(e.target.value)} />
            <br />

            <label className='labels'>Surname</label>
            <br />
            <input type="text" className='inputs' required value={suranme} onChange={e => setSurname(e.target.value)} />
            <br />

            <label className='labels'>Email</label>
            <br />
            <input type="text" className='inputs' required value={email} onChange={e => setEmail(e.target.value)} />
            <br />

            <label className='labels'>Password:</label>
            <br />
            <input type="password" className='inputs' required value={password} onChange={e => setPassword(e.target.value)} />
            <br />

            <label className='labels'>Confirm password:</label>
            <br />

            <input type="password" className='inputs' required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            <br />

            <p>Already a user? <Link to='/Login'><button className='blink'>Login</button></Link></p>


            <button className='abutton' onClick={() => handleSignUp(email,password,confirmPassword , name , suranme)} >Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpForm