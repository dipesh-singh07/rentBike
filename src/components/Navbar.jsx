import { NavLink } from 'react-router'

function Navbar(props) {
  return (
    <nav className="navbar">
      <h2>Bike Rental</h2>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/bikes">Bikes</NavLink>
        <NavLink to="/rented">Rented ({props.rentedCount})</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
