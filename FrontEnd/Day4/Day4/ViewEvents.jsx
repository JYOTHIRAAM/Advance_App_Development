import React from 'react' 
import '../styles/ViewEvents.css'
import Navbar from './Navbar';
function ViewEvents() {
    return (
      <div className="be-overall">
      <div className='home-b'>
        <div className='nav-v'>
            <Navbar/>
        </div>
        <div className='v-total'>
            <div className='table-title'>
                <h3 >View Booked & Past Events:</h3>
            </div>
            <table className='table-fill'>
            <thead>
            <tr>
                <th className='text-left'>Applicant Name</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Time</th>
                <th>Total Price</th>
                {/* <th>Actions on Events</th> */}
                <th>Booking Status</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>MS Dhoni</td>
                <td>SS Birthday Event</td>
                <td>23-10-2003</td>
                <td>13 : 00</td>
                <td>Rs. 12000</td>
                {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
                <td><button className="con">Confirmed</button></td>
                </tr>
                
                <tr>
                <td>MS Dhoni</td>
                <td>SS Birthday Event</td>
                <td>23-10-2003</td>
                <td>13 : 00</td>
                <td>Rs. 12000</td>
                {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
                <td><button className="pe">Pending</button></td>
                </tr>
                <tr>
                <td>MS Dhoni</td>
                <td>SS Birthday Event</td>
                <td>23-10-2003</td>
                <td>13 : 00</td>
                <td>Rs. 12000</td>
                {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
                <td><button className="re">Rejected</button></td>
                </tr>
                
            </tbody>
        </table>


        <br></br><br></br> <br></br> <br></br>
            </div>
       
        </div>
        
      </div>
  )
}


export default ViewEvents