
import { useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function DelEvents({eventName , id, handleClose1}) {

    const navigate=useNavigate();

    const handleButtonClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/book/${id}`);
            window.location.href = "/ViewEvents";
            alert("Event Deleted Successfully!");
        } catch (error) {
            alert("Failed to Delete Event!");
            console.error(error);
        }
    };


    return (
        <div>
            <div className="del-modal-container">
                <div className="del-modal-content">
                <div className="del-evnt-create-box">
                    <div className=''>
                        <a href="/ViewEvents"><img className="del-img" src="https://cdn-icons-png.flaticon.com/512/8367/8367508.png"></img></a>
                        <h2 className='del-h11'>Delete Confirmation</h2><br></br>
                            <div className="del-msg">
                                <h3 className="del-msg1">Do you want to delete&nbsp;' {eventName} ' booked by You?&nbsp;</h3>
                            </div>
                            <br></br>
                            <a href="/ViewEvents"><button className="del-can">Cancel</button></a><button onClick={handleButtonClick} className="del-del">Delete</button>

                            </div>
                            
                    </div>
                </div>
                </div>
            </div>
    )
}
export default DelEvents