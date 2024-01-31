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
                <a href="/AdminViewEvents" className='navHover'>VIEW EVENTS</a>
            </div>
        </div>
    </div>
  )
}

export default AdminNav