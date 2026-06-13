import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

import {
  FaTimes,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const myLink = [
    {
      name: "Telegram",
      link: "https://t.me/akbaral1",
      icon: <FaTelegram className="icon-tg" />,
    },
    {
      link: "https://instagram.com/akbaral1.t7",
      icon: <FaInstagram className="icon-insta" />,
    },
    {
      link: "https://github.com/akbaral1",
      icon: <FaGithub className="icon-github" />,
    },
    {
      link: "https://linkedin.com/in/akbarali",
      icon: <FaLinkedin className="icon-linkedin" />,
    },
  ];
  return (
    <>
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
            <IoClose />{" "}
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
          {myLink.map((item, index) => (
            <div className="social-link" key={index}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
