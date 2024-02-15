import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>
        <div className='Navh'>
            <Navbar/>
        </div>
        <div className='home-back'>
            <div className='home-qbox'>
                <p className='home-quotes'>“It's your special day — get out there and celebrate!”</p>
            </div>
            <div className='hevent-border'>
                <div className='home-events'>
                    <Link to={"/Events"}><div className='home-event'>
                        <p className='home-pevent'>EVENTS</p>
                    </div></Link>
                    <Link to={"/ViewEvents"}><div className='home-myevent'>
                        <p className='home-pevent'>BOOKED EVENTS</p>
                    </div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home