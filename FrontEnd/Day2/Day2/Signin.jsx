import React, { useState } from 'react'
import '../styles/Signin.css'
import {Link} from "react-router-dom"
function Signin() {
    const [admin,setAdmin] = useState('');
    const [user,setUser] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handleAdminChange =(event) =>{
        setAdmin(event.target.value)
    }
    const handleUserChange=(event)=>{
        setUser(event.target.value)
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
  return (
    <div className='signin-page'>
        <div className="box">
            <h2>Login</h2>
            <form className='signin-form'>
                <div className='signin-select'>
                    <label>Choose Role :</label>
                    <select className='signin-select'>
                        <option value={admin} className='signin-option' onChange={handleAdminChange}>ADMIN</option>
                        <option value={user} className='signin-option' onChange={handleUserChange}>USER</option>
                    </select>
                </div>
                <div className="inputBox">
                    <input type="text" value={name} required onChange={handleNameChange}/>
                    <label >Username</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={password} required onChange={handlePasswordChange}/>
                    <label >Password</label>
                </div>
                <input type="submit" name="" value="Submit"/>
            </form>
            <h2>OR</h2>
            <Link to="Signup"><a href='#' className='signin-a'>Create New Account</a></Link>
        </div>
    </div>
  );
}

export default Signin