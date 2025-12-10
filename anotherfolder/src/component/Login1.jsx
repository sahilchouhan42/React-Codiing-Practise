import React, { useState } from 'react'

const Login1 = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [error, setError]=useState('')

    function handleLogin(){
        if(email.trim()===''){
            setError('Email required')
            return
        }
        if(password.trim()===''){
            setError("Password required")
            return
        }
        if(password.length<6){
            setError('Password should be at least 6 characters')
            return
        }

        setError('')
        alert('Login Successfuly')
    }
  return (
    <div>
      <h1>Login Component 1</h1>
      <br />
      <label htmlFor="">Email</label>
      <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      <label htmlFor="">Password</label>
      <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
      {
        error && <p style={{color: "red"}}>{error}</p>
      }

    </div>
  )
}

export default Login1
