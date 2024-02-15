import React, { useState } from 'react'
import '../styles/Signin.css'
import {Link,useNavigate} from "react-router-dom"
import axios from 'axios';
function UserSignin() {
    const [username,setName] = useState('');
    const [password,setPassword] = useState('');
    const navigate= useNavigate();
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response=await axios.post('http://localhost:8080/products/authenticate',{
                "username":username,
                "password":password
            });
            console.log(response.data);
			let user=username;
			localStorage.setItem('user',user);
			localStorage.setItem('token',response.data.token);
			console.log(localStorage.getItem('user'));
			console.log(localStorage.getItem('token'));
            navigate('/Home');
        }catch(error){
            console.error('Error: ',error);
        }
    }
  return (
    <div className='signin-page'>
        <div className="box">
            <h2>User Login</h2>
            <form onSubmit={handleSubmit} className='signin-form'>
                <div className="inputBox">
                    <input type="text" value={username} required onChange={handleNameChange}/>
                    <label >Username</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={password} required onChange={handlePasswordChange}/>
                    <label >Password</label>
                </div><input type="submit" name="" value="Submit"/>
            </form>
            <h2>OR</h2>
            <Link to="/UserSignup"><h5 href='/' className='signin-a'>Create New Account</h5></Link>
        </div>
    </div>
  );
}

export default UserSignin