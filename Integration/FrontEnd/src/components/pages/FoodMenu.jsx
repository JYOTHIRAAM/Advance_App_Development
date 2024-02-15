import React from 'react'
import '../styles/Bookevent.css';
import '../styles/ViewEvents.css' 
import {  Avatar, IconButton,Box,Menu,MenuItem,Divider,ListItemIcon} from '@mui/material'
import { AccountBox,  Logout,AddCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useState,useEffect} from 'react';
import axios from 'axios';
import FoodBox from './FoodBox';
import DelFood from './DelFood';
import EditFood from './EditFood';
import AdminNav from './AdminNav';

function FoodMenu() {

  const[open1,setOpen1] = useState('');
  const[open2,setOpen2] = useState('');

  const [food, setFood] = useState('');
 
  const handleOpen1 = (food) => {
    setOpen1(true);
    setFood(food);
}

  const handleClose1 = () => {
    setOpen1(false);
}

const[open3,setOpen3] = useState('');
const [food1, setFood1] = useState('');
const handleOpen3 = (food1) => {
  setOpen3(true);
  setFood1(food1);
}

const handleCloseForm = () => {
  setOpen3(false);
};

// const [id1, setId1] = useState('');

const handleOpen2 = ( ) => {
  setOpen2(true);

};


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/food")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <AdminNav/>
        <div className='v-total'>
            <div className='table-title'>
                <h2>Manage Food Items:</h2>
            </div>
        <div className='ad-add11'>
            <div className="ad-pointer" onClick={handleOpen2}>
            <AddCircle style={{ fontSize: 35, marginTop:0 }}/><h2 className='ad-poih'>Add Food</h2>
      </div> </div>
       {open2 && (<FoodBox />)}

      
       
        {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents1" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Food Menu or Items available for Now...</h3>
        <p>Use this space for Managing Food Menu!</p>
      </div>
        )}

      
        <br></br><br></br>

        {filteredEvents.length!==0 && (
         
         <table className='table-fill'>
        <thead>
          <tr>
            <th className>Food Name</th>
            <th className>Food Category</th>
            <th className>Food Price</th>
            <th className>Actions</th>
          </tr>
        </thead>
        <tbody>
             {filteredEvents.map(event => (
            <tr key={event.id}>
              <td className>{event.name}</td>
              <td className>{event.category}</td>
              <td className>Rs. {event.price}</td>
              <td className><img onClick={() => handleOpen3(event.name)} className="ve-img1" src="https://cdn-icons-png.flaticon.com/512/5996/5996708.png"></img>
              <img onClick={() => handleOpen1(event.name)} className="ve-img2" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"></img></td>
            </tr>
            ))}
              {open1 && (<DelFood food={food} handleClose1={handleClose1}/>)} 
              {open3 && (
        <EditFood
          food1={food1}
          handleCloseForm={handleCloseForm}
        />
      )}
            
      
        </tbody>
       </table>
       )}


      <br></br><br></br> <br></br> <br></br>
      </div>
        </div>
       
        
      </div>
  )
}


export default FoodMenu