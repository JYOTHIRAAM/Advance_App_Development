import React from 'react'
import '../styles/AdminNav.css'
function AdminNav() {
  return (
    <div className='ad-nav-page'>
        <div className='ad-nav-container'>
          <p className='ad-navdes'>22's MANAGEMENT</p>
            <div className='ad-nav-items'>
                <a href="/AdminHome" className='navHover'>HOME</a>
                <a href="/CreateEvent" className='navHover'>CREATE EVENT</a>
                <a href="/FoodMenu" className='navHover'>FOOD MENU</a>
                <a href="/Addons" className='navHover'>ADD ONS</a>
                <a href="/AdminViewEvents" className='navHover'>VIEW BOOKED EVENTS</a>
                <a href="/" className='navHover'>LOG OUT</a>
            </div>
        </div>
    </div>
  )
}

export default AdminNav