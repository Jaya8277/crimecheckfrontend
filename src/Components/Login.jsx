import React, { useState } from 'react'
import {Link} from "react-router-dom";
import "./Login.css";
const Login = () => {
    
    const [username,setUsername]= useState('');
    console.log(username);
    const Login = () => {
        localStorage.setItem("username",JSON.stringify(username))
        
    }
   function onChangeAlphaNumericInput(e){
      const value = e.target.value;
      const regex = /^[0-9a-zA-Z(\-)]+$/; 
      if (value.match(regex) || value === "") {
        setUsername({ inputValue: value });
        console.log()
      }

    }
  return (
    <div id="login">
    <h1>Pick a UserName</h1>
     <input type="text" placeholder="Enter username"  onChange={onChangeAlphaNumericInput}/>
     <br/>
    <Link to="/createnotice"> <button onClick = {Login}>Login</button></Link>
    </div>
  )
}

export default Login