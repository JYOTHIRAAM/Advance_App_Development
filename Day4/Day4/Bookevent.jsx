import React from 'react'
import '../styles/Bookevent.css'
import Navbar from './Navbar'
function Bookevent({eventName}) {
  return (
    <div className='book-page'>
        <div className='book-container'>
            <form className='book-form'>
                    {eventName}
                <div className='book-content'>
                    <div className='half1'>
                        <div className='book-input'>
                            <label className='book-label'>NAME:</label>
                            <input className='book-inputbox' type='text' placeholder='Enter Your Name'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'> ADDRESS:</label>
                            <input className='book-inputbox' type='text' placeholder='Enter Your Address'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'> MOBILE:</label>
                            <input className='book-inputbox' type='tel' placeholder='Enter Mobile Number'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'> EMAIL:</label>
                            <input className='book-inputbox' type='email' placeholder='Enter Your Email'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>FOOD TYPE:</label>
                            <select className='book-select1'>
                                <option className='book-option1'>VEG</option>
                                <option className='book-option1'>NON VEG</option>
                                <option className='book-option1'>BOTH</option>
                            </select>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>VEG QUANTITY:</label>
                            <input className='book-inputbox' type='tel' placeholder='Enter Veg Quatity'></input>
                        </div>
                        
                        

                    </div>
                    <div className='half2'>
                    <div className='book-input'>
                            <label className='book-label'> EVENT ADDRESS:</label>
                            <input className='book-inputbox' type='text' placeholder='Event Address'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>DATE OF THE EVENT</label>
                            <input className='book-inputbox' type='date' placeholder='Enter Date Of the event'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>TIME OF THE EVENT:</label>
                            <input className='book-inputbox' type='time' placeholder='Enter time of the event'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>NO OF PEOPLE:</label>
                            <input className='book-inputbox' type='number' placeholder='Enter no of people'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>NON VEG QUATINTY:</label>
                            <input className='book-inputbox' type='tel' placeholder='Enter Non Veg Quantity'></input>
                        </div>
                        <div className='book-input'>
                            <label className='book-label'>ADD ONS:</label>
                            <select className='book-select1'>
                                <option className='book-option1'>MAGIC SHOW</option>
                                <option className='book-option1'>DJ PARTY</option>
                                <option className='book-option1'>MEHANDI</option>
                                <option className='book-option1'>GAME SHOW</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='book-next'>
                    <button className='book-button'>SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Bookevent