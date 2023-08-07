// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="list-container">
      <li>
        <Link className="list-type" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-type" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-type" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
