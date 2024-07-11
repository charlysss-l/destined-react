
import {Link}  from 'react-router-dom'
import '../css/Navbar.css'

const NavBar = () => {
  return (
    <div className="navbar">

      <h1 className="brand">destined</h1>

      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/wedding-dress">Wedding Dress</Link>
        </li>
        <li>
          <Link to="/things-to-do"> Things To Do</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
      </ul>

    </div>
  )
}

export default NavBar