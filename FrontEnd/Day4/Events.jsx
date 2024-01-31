import React, { useState } from 'react'
import Navbar from './Navbar'
import '../styles/Events.css'
import Bookevent from './Bookevent'
function Events() {
  const[open1,setOpen] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [eventName, setEventName] = useState('');
  
  const handleOpen = (eventName) => {
      setOpen(true);
      setEventName(eventName);
  }



  const [events, setEvents] = useState([
    // Sample event data
    { id: 1, name: 'Event 1', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 1' },
    { id: 2, name: 'Event 2', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 2' },
    { id: 3, name: 'Event 3', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 3' },
    { id: 4, name: 'Event 3', themeCost: 'Rs. 100', rating: 4, description: 'Yeah! Sample description for Event 4' },
    // Add more events as needed
  ]);

  const filteredEvents = events.filter(event =>
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
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
}
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
          <div key={event.id} onClick={() => handleOpen(event.name)}>

            <div className='events-display'>
            <div className='events-image'><img src="https://i.pinimg.com/736x/a9/70/be/a970be51bad0cd6a86322cd45983b01e.jpg"height={500} />
            </div>
            <div className='events-name'>
              <div className='events-content'>
                 <div className='event-name'> {event.name}</div>
                <p>Event Cost :{event.themeCost}</p>
                <p>Event Rating :{event.rating}</p>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
          </div>
        ))}
         {open1 && (<div className='modelcontainer'><div className='modelcontent'><Bookevent eventName={eventName}/></div></div>)} 

        
        </div>
    </div>
    </>
  )
}

export default Events