import React, { useState } from 'react'

const Login2 = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr]= useState('')

    const login = ()=>{
        if(!email) return setErr('Email Required')
        if(!pass) return setErr('Password Required')
        if(pass.length<6) return setErr('Password too short')
            setErr('')
        alert('Login Successfully')
        }
  return (
    <div>
      <h1>Login Component 2</h1>
      <label htmlFor="">Email</label>
      <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
            <label htmlFor="">Password</label>
      <input type="password" placeholder='Enter Password' onChange={(e)=>setPass(e.target.value)} />
      <br /><br />
      <button onClick={login}>Login</button>
      {
        err && <p style={{color: 'red'}}>{err}</p>
      }
    </div>
  )
}

export default Login2
