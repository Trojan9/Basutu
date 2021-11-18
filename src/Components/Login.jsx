import React from 'react';
import "../Login.css";
import { Link } from "react-router-dom";
import { useState } from "react"




function Login() {
    const [createaccount,setcreateaccount] = useState(false);
function handleclick(){
     setcreateaccount(()=>{
         return true;
     })
}
    return (
        < div className ="login">
            <div className = "login__header">
                <h2>Sign In</h2>
            </div>
            
                <div className = "login__option1">
                    <input className = "login__email" type = "text" placeholder="Email"/>
                </div>
                <div className = "login__option2"> 
                   <input className = "login__password" type = "password" placeholder = "Password"/>
                </div>
                <div>
                {createaccount && <input className = "login__confirmpassword" type ="password" placeholder = "Confirm Password"/>}
                </div>
                              <div className = "login__option3">
                    <button className = "login__button" type = "submit">Login</button>
                </div>
                <Link to = "/">
                <div className = "login__forgotpassword">
                   <p>forgot password?</p>
                </div>
                </Link>
                <div onClick = {handleclick} className = "login__option4">
                    <button className = "login__createaccountbutton" type = "submit">Create Account</button>
                </div>
                
        </div>
    )
}
export default Login;
