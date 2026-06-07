import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.css";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Akbarali</Link>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
        <div className={`hamburger ${menuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" exact>
              Bosh sahifa
            </NavLink>
          </li>
          <li>
            <NavLink to="/haqimda">Men haqimda</NavLink>
          </li>
          <li>
            <NavLink to="/loyihalar">Loyihalar</NavLink>
          </li>
          <li>
            <NavLink to="/aloqa">Aloqa</NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-buttons">
        <button className="dowlond-cvv">CVV yuklash</button>
      </div>
    </div>
  );
}

export default Navbar;
