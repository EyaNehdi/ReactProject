import Card from 'react-bootstrap/Card';
import placeholder from '../assets/placeholder.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Event = ({event,handleClick,handleLike}) =>{
    //vite bundler react
    const images = import.meta.glob('../assets/*',{eager:true});
    const getImagePath = (img) => {
return images[`../assets/${img}`]?.default || placeholder;
    }


return (
    <>
    <Card>
        <Card.Img src= {getImagePath(event.img)} />
        <Card.Body>
            <Card.Title>
            <Link to={`/events/${event.name}`}>
                {event.name}
                </Link>
                </Card.Title>
            <Card.Text>
               Price: {event.price}
                <br/>
               Number of tickets: {event.nbTickets}
                <br/>
               Number of participants: {event.nbParticipants}
            </Card.Text>
            <Button className='m-4' onClick={()=>handleClick(event.name)} disabled={event.nbTickets==0}>Book an event</Button>
            <Button className='m-4' onClick={()=>handleLike(event.name)}>{event.like ? "Dislike" : "Like"}</Button>
            <button className='btn btn-outline-primary'>
              <Link to={`/by/price/${event.price}`}>  Voir details</Link>
                </button>
            </Card.Body>
    </Card>
    </>
);
}
export default Event;