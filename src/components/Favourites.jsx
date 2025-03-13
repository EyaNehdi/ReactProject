import { useFavoriteStore } from "../store/useFavoriteStore";
import { Card,Button } from "react-bootstrap";
import placeholder from '../assets/placeholder.jpg';
function Favourites() {
    const { favorites, removeFavorite } = useFavoriteStore();
    const images = import.meta.glob('../assets/*',{eager:true});
    const getImagePath = (img) => {
return images[`../assets/${img}`]?.default || placeholder;
    }
    return (
      <div>
        {favorites.length === 0 ? (
          <p>Aucun élément en favoris</p>
        ) : (
          <div>
            {favorites.map((event) => (
              <Card key={event.id} className="mb-4">
                <Card.Img src= {getImagePath(event.img)} />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>
                    Price: {event.price}
                    <br />
                    Number of tickets: {event.nbTickets}
                    <br />
                    Number of participants: {event.nbParticipants}
                  </Card.Text>
                  <Button variant="danger" onClick={() => removeFavorite(event.id)}>
                    Remove from Favorites
                  </Button>
                  
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  };
export default Favourites
