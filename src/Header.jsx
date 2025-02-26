import { NavLink } from "react-router-dom";

const Header = () =>{
return(
  <>
  <ul className="d-flex justify-content-center align-items-center mt-5">
    <li className="mx-3">
       {/* <Link to="/events"> Events</Link> */}

       <NavLink to="/events" className={(isActive)=>(isActive ? "btn active-btn" : "btn")}>Events</NavLink>
       </li>
        <li className="mx-3">
      {/* <Link to="login"> Login</Link> */}
      <NavLink to="/login" className={(isActive)=>(isActive ? "btn active-btn" : "btn")}>Login</NavLink>
      </li>
    <li className="mx-3">
    <NavLink to="/ajoutEvent" className={(isActive)=>(isActive ? "btn active-btn" : "btn")}>Ajouter Evenement</NavLink>
      </li>
  </ul>
  </>
);
}
export default Header;