import '../Styles/EventBox.css';
import { useState, useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


function EventBox({ eventName , handleCloseForm }) {


    const navigate=useNavigate();
    const [isActive, setIsActive] = useState(false);


    const [ename, setEname] = useState("");
    const handleEname = (e) => {
        setEname(e.target.value);
    };
    const [name, setName] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    };
    const [mobile, setMobile] = useState("");
    const handleMobile = (e) => {
        setMobile(e.target.value);
    };
    const [email, setEmail] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const [age, setAge] = useState("");
    const handleAge = (e) => {
        setAge(e.target.value);
    };
    const [address, setAddress] = useState("");
    const handleAddress = (e) => {
        setAddress(e.target.value);
    };
    const [date, setDate] = useState("");
    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const [time, setTime] = useState("");
    const handleTime = (e) => {
        setTime(e.target.value);
    };
    const [people, setPeople] = useState("");
    const handlePeople = (e) => {
        setPeople(e.target.value);
    };
    const [veg, setVeg] = useState("");
    const handleVeg = (e) => {
        setVeg(e.target.value);
    };
    const [nonveg, setNonveg] = useState("");
    const handleNonveg = (e) => {
        setNonveg(e.target.value);
    };


    const [options1, setOptions1] = useState([]);
    const [selectedOptions1, setSelectedOptions1] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/food')
          .then(response => {
            setOptions1(response.data);
          })
          .catch(error => {
            console.error('Error fetching options:', error);
          });
      }, []);

      const handleMultiSelectChange1 = (selectedOptions1) => {
        // console.log('Selected options:', selectedOptions1);
        setSelectedOptions1(selectedOptions1);
      };


    const [options2, setOptions2] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/addon')
          .then(response => {
            setOptions2(response.data);
          })
          .catch(error => {
            console.error('Error fetching options:', error);
          });
      }, []);

      const handleMultiSelectChange2 = (selectedOptions2) => {
        setSelectedOptions2(selectedOptions2);
      };


      const selectedOptionNames1 = selectedOptions1.map(option => option.name);
      const selectedOptionNamesString1 = selectedOptionNames1.join(', ');
      
      const selectedOptionNames2 = selectedOptions2.map(option => option.name);
      const selectedOptionNamesString2 = selectedOptionNames2.join(', ');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          ename: eventName,
          name:name,
          mobile: mobile,
          email:email,
          age:age,
          address:address,
          date: date,
          time:time,
          noofpeople:people,
          veg:veg,
          nonveg:nonveg,
          food: selectedOptionNamesString1,
          addons: selectedOptionNamesString2,
          status: "Pending"
        };
        try {
            await axios.post("http://localhost:8080/book", data);
            setIsActive((prev) => !prev);
            setTimeout(() => {
                alert("Booking Successful...Track your Booking Status!!!");
            }, 400);
            console.log(data);
            setTimeout(() => {
                navigate("/ViewEvents",{ state: { applicantName: name } });
            }, 1000);
        } 
        catch (error) {
          console.log(error);
          alert("Booking Failed...Please Try Again!!!");
        }
      };

    
    return (
        <div>
            <div className="modal-container">
                <div className="modal-content">
                <div className="evnt-create-box">
                    <div className=''>
                        <img onClick={handleCloseForm} className="eb-img" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img>
                        <h1 className='eb-h1'>Book your Event:</h1><br></br>
                        <form className='event-details' onSubmit={handleSubmit}>
                            <div className='event-items'>
                            <label className='eb-label'>Event Name</label>
                            <input className="eb-input" type="text" value={eventName} required/>
                            <label className='eb-label'>Applicant Name</label>
                            <input className="eb-input" type="text"  placeholder="Enter Applicant Name"  value={name} onChange={handleName} required/>
                            <label className='eb-label'>Applicant Mobile No</label>
                            <input className="eb-input" type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}" title="Mobile Number must contain exactly 10 Digits" value={mobile} onChange={handleMobile} required />
                            <label className='eb-label'>Applicant Email Id</label>
                            <input className="eb-input" type="email" placeholder="Enter Email Id" value={email} onChange={handleEmail} required/>
                            <label className='eb-label'>Age of the Birthday Person</label>
                            <input className="eb-input" type="number" placeholder="Enter the Age" value={age} onChange={handleAge} required/>
                            </div>
                            <div  className='event-items'>
                            <label className='eb-label'>Applicant Address</label>
                            <textarea className="eb-textarea" type="text" rows="4" cols="50" placeholder="Enter Applicant Address" value={address} onChange={handleAddress} required />
                            <label className='eb-label'>Event Date</label>
                            <input className="eb-input" type="date" value={date} onChange={handleDate} required/>
                            <label className='eb-label'>Event Time</label>
                            <input className="eb-input" type="time" value={time} onChange={handleTime} required/>
                            <label className='eb-label'>No. of People</label>
                            <input className="eb-input" type="number" placeholder="Enter the Number of People" value={people} onChange={handlePeople} required />
                            </div>
                            <div  className='event-items'>
                            <label className='eb-label1'>Count of People Consuming:</label>
                            <label className='eb-label'>Veg</label>
                            <input className="eb-input1" type="number" value={veg} onChange={handleVeg} required/>
                            <label className='eb-label2'>Non-Veg</label>
                            <input className="eb-input11" type="number" value={nonveg} onChange={handleNonveg} required/>
                            <label className='eb-label'>Food Menu</label>
                            
                            <Select className="eb-input2"
                            options={options1}
                            isMulti
                            placeholder="Select Food Category"
                            getOptionLabel={(option1) => ${option1.name} : ${option1.category} (Rs. ${option1.price})}
                            getOptionValue={(option1) => option1.id} // Assuming each option has a unique id
                            onChange={handleMultiSelectChange1}
                            styles={{
                                option: (provided) => ({
                                  ...provided,
                                  fontSize: '14px', 
                                  width: '300px' 
                                }),
                              }}
                            value={selectedOptions1} required
                            /><br></br>


                            <label className='eb-label'>Add-Ons</label>
                            <Select className="eb-input2"
                            options={options2}
                            isMulti
                            placeholder="Select the Category"
                            onChange={handleMultiSelectChange2}
                            getOptionLabel={(option2) => ${option2.name} : Rating-${option2.rating} (Rs. ${option2.price})}
                            getOptionValue={(option2) => option2.id} // Assuming each option has a unique id
                            styles={{
                                option: (provided) => ({
                                  ...provided,
                                  fontSize: '14px',
                                  width: '320px' 
                                }),
                              }}
                            value={selectedOptions2} />


                            <div className='eb-box1'>
                                <input className='eb-box2' type="checkbox"required/>
                                <p className="eb-box3">Confirm the Entered Details!!!</p>
                            </div>

                            <div className={wrapper ${isActive ? 'active' : ''}}>
                                <button className={custom-button ${isActive ? 'is_active' : ''}} >
                                    <span>Book Event</span>
                                    <div className="success">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                        <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                    </svg>
                                    </div>
                                </button>
                                </div>
                            {/* <button className='create-button' >Create Event</button> */}
                            </div>
                            
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default EventBox