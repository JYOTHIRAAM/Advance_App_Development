import React from 'react'
import '../styles/Navbar.css'
function Navbar() {
  return (
    <div className='nav-page'>
        <div className='nav-container'>
          <p className='navdes'>22's MANAGEMENT</p>
            <div className='nav-items'>
                <a href="#" className='navHover'>HOME</a>
                <a href="#" className='navHover'>ABOUT</a>
                <a href="#" className='navHover'>CONTACT</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar