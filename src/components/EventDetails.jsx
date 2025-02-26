import { useEffect } from "react";
import { useParams } from "react-router-dom"
import data from '../assets/data/events.json';
import placeholder from '../assets/placeholder.jpg';
function EventDetails() {
     //vite bundler react
        const images = import.meta.glob('../assets/*',{eager:true});
        const getImagePath = (img) => {
    return images[`../assets/${img}`]?.default || placeholder;
        }
    const {name}=useParams();
    useEffect(()=>{
        
    },[])
    const event = data.find(e => e.name === name);
  
    if (!event) {
      return <p>Événement non trouvé</p>;
    }
  
    return (
      <div>
        <h2>Détails de événement: {event.name}</h2>
        <img src={getImagePath(event.img)} alt={event.name} />
        <p>Prix: {event.price}</p>
        <p>Description: {event.description}</p>
        <p>Nombre de billets disponibles: {event.nbTickets}</p>
        {/* Affichez d'autres détails de l'événement ici */}
      </div>
    );
}

export default EventDetails
