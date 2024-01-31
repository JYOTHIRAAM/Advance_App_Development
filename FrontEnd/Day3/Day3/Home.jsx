import React from 'react'
import Navbar from './Navbar'
import '../styles/Home.css'
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
                    <div className='home-event'>
                        <p className='home-pevent'>EVENTS</p>
                    </div>
                    <div className='home-myevent'>
                        <p className='home-pevent'>BOOKED EVENTS</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home