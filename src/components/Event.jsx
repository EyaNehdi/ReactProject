import Card from 'react-bootstrap/Card';
import placeholder from '../assets/placeholder.jpg';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
const Event = ({event,handleClick,handleLike}) =>{
    //vite bundler react
    const images = import.meta.glob('../assets/*',{eager:true});
    const getImagePath = (img) => {
return images[`../assets/${img}`]?.default || placeholder;
    }
   


    useEffect((()=>{
        
    }),[like])
return (
    <>
    <Card>
        <Card.Img src= {getImagePath(event.img)} />
        <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            <Card.Text>
               Price: {event.price}
                <br/>
               Number of tickets: {event.nbTickets}
                <br/>
               Number of participants: {event.nbParticipants}
            </Card.Text>
            <Button className='m-4' onClick={()=>handleClick(event.name)} disabled={event.nbTickets==0}>Book an event</Button>
            <Button className='m-4' onClick={()=>handleLike(event.name)}>Like</Button>
            </Card.Body>
    </Card>
    </>
);
}
export default Event;