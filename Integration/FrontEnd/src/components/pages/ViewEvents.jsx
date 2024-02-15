import React from 'react' 
import '../styles/ViewEvents.css'
import axios from 'axios';
import { useState,useEffect} from 'react';
import Navbar from './Navbar';
import DelEvents from './DelEvents';
import EditEvents from './UpdateEvents';
function ViewEvents() {
  const[open1,setOpen1] = useState('');
  const[open2,setOpen2] = useState('');

  const [eventName, setEventName] = useState('');
  const [id, setId] = useState('');
 
  const handleOpen1 = (eventName,id) => {
    setOpen1(true);
    setEventName(eventName);
    setId(id);
}

  const handleClose1 = () => {
    setOpen1(false);
}

  const handleCloseForm = () => {
    setOpen2(false);
  };
  
  const [id1, setId1] = useState('');
  
  const handleOpen2 = ( id1) => {
    setOpen2(true);
    setId1(id1);
  
  };
  
  let uname=localStorage.getItem('user')
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
    const filteredEvents = data.filter(event=>event.name==uname);

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
            <Navbar/>
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
            <th>Actions</th>
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
              <td><button className={event.status.toLowerCase() === 'pending' ? 'pe' : event.status.toLowerCase() === 'confirmed' ? 'con' : 're'}>{event.status}</button></td>
              <td><img onClick={() => handleOpen2(event.id)} className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img>
              <img onClick={() => handleOpen1(event.ename,event.name)} className="ve-img2" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td>
            </tr>
            ))}
              {open1 && (<DelEvents eventName={eventName} id={id} handleClose1={handleClose1}/>)} 
              {open2 && (<EditEvents id1={id1} handleCloseForm={handleCloseForm}/>
    )} 
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


export default ViewEvents