import React, { useState } from 'react'
import '../styles/Signin.css'
import {Link, Navigate} from "react-router-dom"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signin() {
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
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(name==="Raam"&&password==="Raam@123"){
            navigate('/AdminHome');
            setName('');
            setPassword('');
        }
        else{
            window.alert("Incorrect username and Password");
        }
    }
  return (
    <div className='signin-page'>
        <div className="box">
            <h2>Admin Login</h2>
            
            <form onSubmit={handleSubmit} className='signin-form'>
                <div className="inputBox">
                    <input type="text" value={name} required onChange={handleNameChange}/>
                    <label >Username</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={password} required onChange={handlePasswordChange}/>
                    <label >Password</label>
                </div><input type="submit" name="" value="Submit"/>
            </form>
            <h2>OR</h2>
            <Link to="Signup"><a href='#' className='signin-a'>Create New Account</a></Link>
        </div>
    </div>
  );
}

export default Signin