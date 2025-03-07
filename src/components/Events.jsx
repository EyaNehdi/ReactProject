import Event from "./Event";
import Header from "../Header";
import { useState , useEffect } from "react";
import { getallEvents , deleteEvent  } from "../services/api";
import {useCounterStore} from "../store/useCounterStore";
import { useEventStore } from "../store/useEventStore";

const Events = () => {
 const {deleteEvent } = useEventStore();

    // const [events,setEvents] = useState([]);
    const {events, fetchEvents} = useEventStore();
    // useEffect((()=>{
    //     setEvents(data);
    // }),[])
    const handleClick = (name) => {
        // setEvents(events.map((event) =>
        //     event.name === name
        //         ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
        //         : event
        // ));
    };
    useEffect(()=>{
      // const fetchEvents = async () =>{
      //   const result = await getallEvents();
      //   console.log(result);
      //   setEvents(result.data);      }
      fetchEvents();
    },[])
    useEffect(() => {

    },[])
    const handleLike = (name) => {
//         setEvents(events.map((event)=>
// event.name === name ?
//           {...event, like:!event.like }: event
//         ));
    };
    const handleDelete = async (id) => {
      try {
          await deleteEvent(id);
          fetchEvents();
      } catch (error) {
          console.error("Failed to delete event:", error);
      }
  };
  const{ count,increment,decrement,reset } = useCounterStore();
    
    return (
        <>
        <Header />
        <div>{count}
        <button onClick={increment}>Increment</button>
        </div>
        
        <h1>Events Components</h1>
        <div className="d-flex flex-wrap justify-content-start">
        {events.map((event, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={index}>
            <Event 
              event={event} 
              handleClick={handleClick} 
              handleLike={handleLike} 
               handleDelete={handleDelete}
            />
          </div>
        ))}
      </div>
        </>
    );
}
export default Events;