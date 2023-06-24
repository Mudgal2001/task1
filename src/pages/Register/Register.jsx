import React, { useState } from 'react'
import axios from 'axios';
import "./register.css"
const Register = () => {
  const [name,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const handleSubmit = async (e)=>{
      e.preventDefault();
      setError(false);
      try{
        const res = await axios.post("http://localhost:3001/user/register",{
            name,
            email,
            password
        });
        console.log(res);
        res.data && window.location.replace("/");
      }catch(err){
        setError(err)
      }
  }
  return (
    <div className='Register'>
         <span className="registerTitle">Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" 
            className='registerInput'
            placeholder='Enter user name'
            onChange={(e)=>setUserName(e.target.value)}
          />
          <label>Email</label>
          <input type="text" 
            className='registerInput'
            placeholder='Enter email'
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label>Password</label>
          <input type="text" 
            className='registerInput'
            placeholder='Enter password'
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button  className='registerBtn' type = 'submit' >
            Register
          </button>
        </form>
        {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  )
}

export default Register