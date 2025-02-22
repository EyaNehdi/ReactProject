import Event from "./Event";
import data from '../assets/data/events.json'
import Header from "../Header";

import { useState , useEffect } from "react";
const Events = () => {
    const [events,setEvents] = useState([]);
    useEffect((()=>{
        setEvents(data);
    }),[])
    const handleClick = (name) => {
        setEvents(events.map((event) =>
            event.name === name
                ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
                : event
        ));
    };
    const handleLike = (name) => {
        setEvents(events.map((event)=>
event.name === name ?
          {...event, like:!event.like }: event
        ));
    };
    
    return (
        <>
        <Header />
        <h1>Events Components</h1>
        <div>
        {events.map((event,index)=>
<Event event={event} key={index} handleClick={handleClick} handleLike={handleLike} />
        )}
        </div>
        </>
    );
}
export default Events;