import Card from 'react-bootstrap/Card';
import placeholder from '../assets/placeholder.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useFavoriteStore } from '../store/useFavoriteStore';
const Event = ({event,handleClick,handleLike,handleDelete}) =>{
    //vite bundler react
    const images = import.meta.glob('../assets/*',{eager:true});
    const getImagePath = (img) => {
return images[`../assets/${img}`]?.default || placeholder;
    }
    const { addFavorite } = useFavoriteStore();

    const deleteEvent = () => {
        if (window.confirm(`Are you sure you want to delete the event: ${event.name}?`)) {
            handleDelete(event.id); // Call the delete function passed down from parent
        }
    };
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
                <Button className="btn btn-warning m-4">
          <Link to={`/update-event/${event.id}`} style={{ textDecoration: 'none', color: 'white' }}>
            Update
          </Link>
        </Button>
        <Button variant="danger" onClick={deleteEvent} className="m-4">
                        Delete
                    </Button>
                    <Button className="m-4" onClick={() => addFavorite(event)}>
          Add to Favorites
        </Button>
            </Card.Body>
    </Card>
    </>
);
}
export default Event;