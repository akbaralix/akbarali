import React from "react";
import { FaInstagram, FaGithub, FaTelegram } from "react-icons/fa";
import RippleLink from "./RippleLink";
import rasm from "./img/rasim.jpg";
import union from "./img/Union.svg";
import "./App.css";
import "./Ripple.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <img className="header-img" src={rasm} alt="Placeholder" />
        <h2>Akbarali Tursunboyev</h2>

        <RippleLink
          style={{
            background: "linear-gradient(to right, #4f5bd5, #d62976, #feda75)",
            color: "white",
          }}
          href="https://www.instagram.com/akbarali_.24/"
        >
          <FaInstagram style={{ color: "#fff", fontSize: "34px" }} />
          <span className="text">Instagram</span>
          <span className="next">≻</span>
        </RippleLink>

        <RippleLink
          style={{ backgroundColor: "#0088CC", color: "white" }}
          href="https://www.t.me/akbaral1"
        >
          <FaTelegram style={{ color: "#fff", fontSize: "34px" }} />
          <span className="text">Telegram</span>
          <span className="next">≻</span>
        </RippleLink>

        <RippleLink
          style={{ backgroundColor: "#181717", color: "white" }}
          href="https://github.com/akbaralix"
        >
          <FaGithub style={{ color: "#fff", fontSize: "34px" }} />
          <span className="text">GitHub</span>
          <span className="next">≻</span>
        </RippleLink>

        <RippleLink
          style={{ backgroundColor: "#282c33", color: "white" }}
          href="https://akbarali-partfolio.netlify.app/"
        >
          <img className="union-img" src={union} alt="Union" />
          <span className="text">Portfolio</span>
          <span className="next">≻</span>
        </RippleLink>
      </div>
    </div>
  );
}

export default App;
