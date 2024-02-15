import React, { useState ,useEffect} from 'react'
import Navbar from './Navbar'
import '../styles/Events.css'
import Bookevent from './Bookevent'
import axios from 'axios'
function Events() {
  const[open1,setOpen] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [eventName, setEventName] = useState('');
  const [eventPrice, setEventPrice] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
      setEventPrice(eventPrice);
  }
  const handleCloseForm = () => {
    setOpen(false);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/events")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredEvents = data.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
};

const handleSearchSubmit = (e) => {
e.preventDefault();
// Handle the search submission (e.g., send search query to the server)
console.log('Search term submitted:', searchTerm);
};

const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
  return (<>
    <div className='event-page'>
      <div className='enav'>
        <Navbar/>
      </div>
        <div className='events-search'>
          <form className='events-box' onSubmit={handleSearchSubmit}>
            <input className='search-box' type='text' placeholder='Search Here...' value={searchTerm} onChange={handleSearchChange}></input>
            <button className='search-button' type='submit'>Search</button>
          </form>

        </div>
        <div className='events-align'>
        {filteredEvents.map(event => (
          <div key={event.id} onClick={() => handleOpen(event.name,event.price)}>

            <div className='events-display'>
            <div className='events-image'><img src={event.image}height={500} />
            </div>
            <div className='events-name'>
              
              <div className='events-content'>
                 <div className='event-name'> {event.name}</div>
                <p>Event Cost :{event.price}</p>
                <p>Event Rating :{event.rating}</p>
                <p>Event Desc: {event.description}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
         {open1 && (<div className='modelcontainer'><div className='modelcontent'><Bookevent eventName={eventName}  eventPrice={eventPrice} handleCloseForm={handleCloseForm}/></div></div>)} 
        </div>
    </div>
    </>
  )
}

export default Events