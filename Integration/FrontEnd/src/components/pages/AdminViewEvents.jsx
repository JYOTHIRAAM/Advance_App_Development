import React from 'react'
import AdminNav from './AdminNav'
import axios from 'axios';
import { useState,useEffect } from 'react';
import '../styles/AdminViewEvents.css'
import DelUser from './DelUser';
function AdminViewEvents() {
    const[open1,setOpen1] = useState('');

  const [eventName, setEventName] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const handleClose1 = () => {
    setOpen1(false);
}

  const handleOpen1 = (eventName,name,id) => {
    setOpen1(true);
    setEventName(eventName);
    setName(name);
    setId(id);
}

const [data, setData] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:8080/book")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

    
const handleStatusChange = async (eventId, status) => {
    console.log("Updating status for event ID:", eventId);
    console.log("New status:", status);
    try {
        await axios.put(`http://localhost:8080/book/update/${eventId}`, status, {
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        window.location.href="/AdminViewEvents";
        alert("Booking Status Updated Successfully!");
        console.log("Booking status updated successfully!");
    } catch (error) {
        console.error("Error updating booking status:", error);
        alert("Updating Booking Status Failed...Please Try Again!");
    }
}

  const filteredEvents = data;

  
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
  
      return (
        <div className="be-overall">
        <div className='home-b'>
          <div className='nav-v'>
              <AdminNav/>
          </div>
          <div className='v-total'> 
              <div className='table-title'>
                  <h3 >View Booked & Past Events:</h3>
              </div>
              {filteredEvents.length === 0 && (
        <div className="be-none">
          <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
          <h3>Oops! No Booked or Past Events available for Now...</h3>
          <p>Book your Awesome events now!</p>
        </div>
          )}
          {filteredEvents.length!==0 && (
              <table className='table-fill'>
          <thead>
            <tr>
              <th>Applicant Name</th>
              <th>Event Name</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Total Price</th>
              <th>Booking Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
               {filteredEvents.map(event => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.ename}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>Rs. {event.price}</td>
                <td><select
                      value={event.status}
                      onChange={(e) => {
                        handleStatusChange(event.id, e.target.value);
                      }}
                      className={event.status.toLowerCase() === 'pending' ? 'pe1' : event.status.toLowerCase() === 'confirmed' ? 'con1' : 're1'}
                    >
                      <option className="drop" value="Pending">Pending</option>
                      <option className="drop" value="Confirmed">Confirmed</option>
                      <option className="drop" value="Rejected">Rejected</option>
                    </select>
              </td>
              <td className='td11'>
              <img onClick={() => handleOpen1(event.ename,event.name,event.id)} className="ve-img211" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img>
</td>
                {/* <td><img onClick={() => handleOpen2(event.id)} className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img>
                <img onClick={() => handleOpen1(event.ename,event.name)} className="ve-img2" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td> */}
              </tr>
              ))}
              {open1 && (<DelUser eventName={eventName} name={name} id={id} handleClose1={handleClose1}/>)} 
          </tbody>
         </table>
              )
              }
          <br></br><br></br> <br></br> <br></br>
              </div>
         
          </div>
          
        </div>
    )
}

export default AdminViewEvents