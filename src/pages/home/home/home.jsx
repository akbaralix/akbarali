import React from "react";
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import "./home.css";

function Home() {
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
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h2>Salom Men Akbarali</h2>
          <p>
            Full-Stack (Frontend & Backend) dasturchiman. 2 yildan buyon
            zamonaviy veb-saytlar va murakkab tizimlarni qurish bilan
            shug'ullanaman.
          </p>

          <div className="home-social">
            {myLink.map((item, index) => (
              <div className="home-social-link" key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}

                  <span className="tooltip-text">
                    {item.icon.props.className
                      .replace("icon-", "")
                      .toUpperCase()}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="home-img">
          <img src="/src/assets/assets.png" alt="Akbarali" />
        </div>
      </div>
    </div>
  );
}

export default Home;
