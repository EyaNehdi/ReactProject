import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import '../assets/NavigationBar.css';
import {useCounterStore} from '../store/useCounterStore';
function NavigationBar() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <>
<div>
  {count}
</div>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active-link" : ""}>My Events</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/events" className={({ isActive }) => isActive ? "active-link" : ""}>Events</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/eventform" className={({ isActive }) => isActive ? "active-link" : ""}>Ajouter Event</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/favourite" className={({ isActive }) => isActive ? "active-link" : ""}>Favoris</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}

export default NavigationBar
