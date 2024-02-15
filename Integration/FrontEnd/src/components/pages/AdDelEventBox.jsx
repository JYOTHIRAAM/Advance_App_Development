import '../styles/AdDelEventBox.css';
import axios from 'axios';


function AdDelEventBox({eventName, handleClose}) {

    const handleButtonClick = async () => {
        try {
            await axios.delete(`http://localhost:8080/events/${eventName}`);
            window.location.href = "/CreateEvent";
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
                        <img onClick={handleClose} className="del-img" src="https://cdn-icons-png.flaticon.com/512/8367/8367508.png"></img>
                        <h2 className='del-h11'>Delete Confirmation</h2><br></br>
                            <div className="del-msg">
                                <h3 className="del-msg1">Are you sure you want to delete the event  &nbsp;' {eventName} ' ?&nbsp;</h3>
                            </div>
                            <br></br>
                            <a href="/CreateEvent"><button className="del-can">Cancel</button></a><button onClick={handleButtonClick} className="del-del">Delete</button>

                            </div>
                            
                    </div>
                </div>
                </div>
            </div>
    )
}
export default AdDelEventBox