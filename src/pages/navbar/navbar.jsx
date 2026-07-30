import { useState, useEffect } from "react"; // 1. useEffect ni qo'shing
import { Link, NavLink } from "react-router-dom";
import { CloseButton } from "../../components/Button";

import {
  FaTimes,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import "./navbar.css";
import logo from "/src/assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      // Sahifa skroll bo'lgan masofasini saqlab qolamiz
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Menyu yopilganda scroll joyini qaytaramiz
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [menuOpen]);

  const myLink = [
    {
      name: "Telegram",
      link: "https://t.me/akbaral1",
      icon: <FaTelegram className="icon-tg" />,
    },
    {
      link: "https://instagram.com/akbarali.t7",
      icon: <FaInstagram className="icon-insta" />,
    },
    {
      link: "https://github.com/akbaral1",
      icon: <FaGithub className="icon-github" />,
    },
    {
      link: "https://linkedin.com/in/akbaralix",
      icon: <FaLinkedin className="icon-linkedin" />,
    },
  ];

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Logo" />
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
              <NavLink to="/blog">Blog</NavLink>
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
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <CloseButton
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          />
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
              <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
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
