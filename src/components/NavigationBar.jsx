import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import '../assets/NavigationBar.css';
function NavigationBar() {
  return (
    <>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active-link" : ""}>My Events</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/events" className={({ isActive }) => isActive ? "active-link" : ""}>Events</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}

export default NavigationBar
