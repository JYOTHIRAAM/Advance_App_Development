import React from 'react'
import AdminNav from './AdminNav'
import '../styles/AdminHome.css'
import { Link } from 'react-router-dom'
function AdminHome() {
  return (
    <div className='ad-home'>
        <div className='ad-Navh'>
            <AdminNav/>
        </div>
        <div className='ad-home-back'>
            <div className='ad-home-qbox'>
                <p className='ad-home-quotes'>“Seamless Birthday Event Management,Anytime,Anywhere”</p>
            </div>
            <div className='ad-hevent-border'>
                <div className='ad-home-events'>
                    <Link to={"/CreateEvent"}><div className='ad-home-createevent'>
                        <p className='ad-home-pevent'>CREATE EVENT</p>
                    </div></Link>
                    <Link to={"/AdminViewEvents"}><div className='ad-home-event'>
                        <p className='ad-home-pevent'>EVENTS</p>
                    </div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminHome