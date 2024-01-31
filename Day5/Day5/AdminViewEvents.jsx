import React from 'react'
import AdminNav from './AdminNav'
import '../styles/AdminViewEvents.css'
function AdminViewEvents() {
  return (
    <div className='adv-page'>
        <div className='adv-nav'>
            <AdminNav/>
        </div>
        <div className='v-total'>
            <div className='table-title'>
                <h3 >View Created Events</h3>
            </div>
            <table className='table-fill'>
            <thead>
            <tr>
                <th>Event Name</th>
                <th>Event Price</th>
                <th>Event Photographer</th>
                <th>Event Description</th>
                {/* <th>Actions on Events</th> */}
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>SS BirthDay Event</td>
                <td>Rs. 9000</td>
                <td>Raam</td>
                <td>The Best Event Organiser</td>
                <td><button className='re'>DELETE</button></td>
                {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
                <td><button className="con">UPDATE</button></td>
                </tr>
                
                <tr>
                <td>SS BirthDay Event</td>
                <td>Rs. 9000</td>
                <td>Raam</td>
                <td>The Best Event Organiser</td>
                <td><button className='re'>DELETE</button></td>
                {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
                <td><button className="con">UPDATE</button></td>
                </tr>
                <tr>
                <td>SS BirthDay Event</td>
                <td>Rs. 9000</td>
                <td>Raam</td>
                <td>The Best Event Organiser</td>
                <td><button className='re'>DELETE</button></td>
                {/* <td><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img><img className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
                <td><button className="con">UPDATE</button></td>
                </tr>
                
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default AdminViewEvents