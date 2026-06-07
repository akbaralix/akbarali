import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const socialLinks = [
    {
      link: "https://t.me/akbarali",
      icon: FaTelegram,
    },
    {
      link: "https://instagram.com/akbaral1.t7",
      icon: FaInstagram,
    },
    {
      link: "https://linkedin.com/in/akbarali",
      icon: FaLinkedin,
    },
  ];
  return (
    <>
      {/* TOP NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Akbarali
          </Link>
        </div>

        <div>
          <button
            className="menu-btn hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <NavLink to="/" end>
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
      </div>

      <div className={`mn-nav ${menuOpen ? "open" : ""}`}>
        <div className="mn-header">
          <div className="logo">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Akbarali
            </Link>
          </div>

          <button className="close-btn" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                Bosh sahifa
              </NavLink>
            </li>
            <li>
              <NavLink to="/haqimda" onClick={() => setMenuOpen(false)}>
                Men haqimda
              </NavLink>
            </li>
            <li>
              <NavLink to="/loyihalar" onClick={() => setMenuOpen(false)}>
                Loyihalar
              </NavLink>
            </li>
            <li>
              <NavLink to="/aloqa" onClick={() => setMenuOpen(false)}>
                Aloqa
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="social-links">
          {socialLinks.map((item, index) => (
            <div className="social-link" key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <item.icon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
