import '../styles/EventBox.css';
import '../styles/FoodBox.css';
import { useState, useEffect } from 'react';
import logo10 from '../Assets/Land.jpg'
import axios from 'axios';


function EditAddon({addon1,handleCloseForm}) {

    const [isActive, setIsActive] = useState(false);


    const [name, setName] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    };
  
    const [rating, setRating] = useState("");
    const handleRating = (e) => {
        setRating(e.target.value);
    };
   
    const [price, setPrice] = useState("");
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };
   


    useEffect(() => {
        axios
          .get(`http://localhost:8080/addon/${addon1}`)
          .then((response) => {
            const eventData = response.data;
            if (eventData) {
                const {
                        name,
                        rating,
                        price
                    } = eventData;
                    setName(name);
                    setRating(rating);
                    setPrice(price);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      }, [addon1]);


      const handleSubmit = async (e) => {

        e.preventDefault();
        const data = {
          name:name,
          rating: rating,
          price: price,
        };
        try {
            await axios.put(`http://localhost:8080/addon/${addon1}`, data);
            setIsActive((prev) => !prev);
            setTimeout(() => {
                alert("Updated Successfully!!!");
            }, 400);
            console.log(data);
            setTimeout(() => {
                window.location.href = "/Addons";
            }, 1000);
        } 
        catch (error) {
          console.log(error);
          alert("Updating Failed...Please Try Again!!!");
        }
      };

    return (
        <div>
            <div className="ad-modal-container">
                <div className="ad-modal-content22">
                <img className="ad-img2" src={logo10}></img>
                <div className="ad-evnt-create-box22">
                    <div className=''>
                        <a href="/Addons"><img className="ad-img22" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                        <br></br>
                        <h1 className='ad-h1121'>Edit Themes:</h1><br></br>
                        <form className='ad-event-details' onSubmit={handleSubmit}>
                            <div className='ad-event-items'>
                            <label className='ad-label'>Add-On Name</label>
                            <input className="ad-input22" type="text" placeholder="Enter Add-On Name" value={name} onChange={handleName} required />
                        
                            <label className='ad-label'>Rating</label>
                            <input className="ad-input22" type="number" placeholder="Enter Add-On Rating" value={rating} onChange={handleRating} required />

                           
                            <label className='ad-label'>Add-On Price</label>
                            <input className="ad-input22" type="number" placeholder="Enter Add-On Cost" value={price} onChange={handlePrice} required/><br></br><br></br>
                            </div>
                            <div className=''>
                            <div className='ad-boxfood'>
                                <input className='ad-box2' type="checkbox" required/>
                                <p className="ad-box3">&nbsp;Confirm the Entered Details!!!</p>
                            </div>
                            <div className='add-but11'>
                            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                                <button className={`custom-button ${isActive ? 'is_active' : ''}`}>
                                    <span>Edit Add-On</span>
                                    <div className="success">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                        <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                    </svg>
                                    </div>
                                </button>
                                </div>
                            {/* <button className='create-button' >Create Event</button> */}
                            </div></div>
                            
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default EditAddon