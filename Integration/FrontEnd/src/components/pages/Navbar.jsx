import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav-page'>
        <div className='nav-container'>
          <p className='navdes'>22's MANAGEMENT</p>
            <div className='nav-items'>
                <a href="/Home" className='navHover'>HOME</a>
                <a href="/Events" className='navHover'>EVENTS</a>
                <a href="/ViewEvents" className='navHover'>MY EVENTS</a>
                <a href="/" className='navHover'>LOG OUT</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
