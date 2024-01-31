import React, { useState } from 'react'
import '../styles/Signup.css'
function Signup() {
    const [admin,setAdmin]=useState('');
    const [user,setUser]=useState('');
    const [name,setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');

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

    const handleAdminChange =(event) =>{
        setAdmin(event.target.value)
    }
    const handleUserChange=(event)=>{
        setUser(event.target.value)
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
  return (
    <div className='signup-page'>
        <div className="signup-box">
            <h2>Register</h2>
            <form className='signup-form'>
                <div className='signup-select'>
                    <label>Choose Role :</label>
                    <select className='signup-select'>
                        <option value={admin} className='signup-option' onChange={handleAdminChange}>ADMIN</option>
                        <option value={user} className='signup-option' onChange={handleUserChange}>USER</option>
                    </select>
                </div>
                <div className="inputBox">
                    <input type="text" value={name} required onChange={handleNameChange}/>
                    <label >Username</label>
                </div>
                <div className="inputBox">
                    <input type="email" value={email} required onChange={handleEmailChange}/>
                    <label >Email</label>
                </div>
                <div className="inputBox">
                    <input type='number' value={mobile} required onChange={handleMobileChange}/>
                    <label >Mobile Number</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={password} required onChange={handlePasswordChange}/>
                    <label >Password</label>
                </div>
                <div className="inputBox">
                    <input type="password" value={confirmpassword} required onChange={handleConfirmPasswordChange}/>
                    <label >Confirm Password</label>
                </div>
                <input type="submit" onClick={checkPassword} value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default Signup