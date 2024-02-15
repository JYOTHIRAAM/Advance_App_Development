import React, { useState } from 'react'
import '../styles/Signup.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
function UserSignup() {
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const navigate=useNavigate();
    const checkPassword = (e) =>{
        const mobileRegex=/^\d{10}$/;
        const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if(!mobileRegex.test(mobile)){
          window.alert(
            "Mobile number must contain 10 Numbers."
          );
          initialize3()
          return;
        }
        else if (!passwordRegex.test(password)) {
          window.alert(
            "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
          );
          initialize1()
          return;
        }
        else if (password !== confirmpassword) {
          window.alert("Passwords do not match.");
          initialize2()
          return;
        }
        else{
          window.alert("Registration Successful !!!");
        }
      }
      const initialize1 = () =>{
        setPassword('')
        setConfirmPassword('')
      }
      const initialize2 = () =>{
        setConfirmPassword('')
      }
      const initialize3 = () =>{
        setMobile('')
      }
    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };

    const handleMobileChange = (event) => {
      setMobile(event.target.value);
    };
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:8080/products/register",
          {
            name,
            email,
            mobile,
            password,
            // confirmpassword,
          },
        );
      
        console.log("Sign in successful");
        console.log(response.data); 
        navigate("/UserSignin");
  
        // setName("");
        // setEmail("");
        // setMobile("");
        // setPassword("");
        // setRegistrationError("");
      } catch (error) {
        console.error("Registration failed");
        console.error(error); 
  
      }
    }
  return (
    <div className='signup-page'>
        <div className="signup-box">
            <h2>User Register</h2>
            <form onSubmit={handleSubmit} className='signup-form'>
                <div className="inputBox">
                    <input type="text" value={name} required onChange={handleNameChange}/>
                    <label >Username</label>
                </div>
                <div className="inputBox">
                    <input type="email" value={email} required onChange={handleEmailChange}/>
                    <label >Email</label>
                </div>
                <div className="inputBox">
                    <input type='text' value={mobile} required onChange={handleMobileChange}/>
                    <label >Mobile Number</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={password} required onChange={handlePasswordChange}/>
                    <label >Password</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={confirmpassword} required onChange={handleConfirmPasswordChange}/>
                    <label >Confirm Password</label>
                </div><input type="submit" onClick={checkPassword} value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default UserSignup