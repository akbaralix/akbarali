import React, { useState } from "react";
import { FaGithub, FaTelegram, FaGlobe, FaBookOpen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md"; // Hamma loyihalarni ko'rish uchun ikonka

import taxiImg from "../../assets/taxi.jpg";
import profilmImg from "../../assets/profilm.png";
import slydAiImg from "../../assets/SlydAI.jpg";
import akaStarImg from "../../assets/AkaStar.jpg";
import SEO from "../../components/SEO";

import "./projects.css";

function Projects() {
  // 🎯 1. Tanlangan kategoriyani saqlash uchun state (Boshida "All" - ya'ni hammasi)
  const [activeFilter, setActiveFilter] = useState("All");

  const projectsData = [
    {
      id: 1,
      img: taxiImg,
      title: "Telegramda taksi bot",
      projectUrl: "https://t.me/OzimizniTaksiBot",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Telegram Bot",
      desc: "Mintaqaviy transport muammolarini hal qilish uchun ishlab chiqilgan maxsus taxi-hailing boti...",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f695/512.webp",
      emojiAlt: "🚖",
      tech: ["Node.js", "Telegram Bot API", "MongoDb"],
    },
    {
      id: 2,
      img: profilmImg,
      title: "Profilm",
      projectUrl: "https://profilimuz.web.app",
      projectGithubUrl: "https://github.com/akbaralix/profilm",
      type: "Frontend Veb Ilova",
      desc: "Institut tadbiri uchun maxsus yozilgan, yuqori tezlikda ishlovchi dinamik veb-sayt...",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp",
      emojiAlt: "🏆",
      tech: ["React", "Vite", "JavaScript", "HTML5", "MongoDB"],
    },
    {
      id: 3,
      img: slydAiImg,
      title: "Slaydlar Yaratuvchi Telegram bot",
      projectUrl: "https://github.com/akbaralix/SlydAi",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Telegram Bot",
      desc: "Tarixiy ma'lumotlar va jadidlar merosini zamonaviy interfeysda ko'rsatib beruvchi veb-loyiha...",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp",
      emojiAlt: "📚",
      tech: ["Node.js", "Telegram Bot API", "GROQ AI API", "MongoDB"],
    },
    {
      id: 4,
      img: akaStarImg,
      title: "Referal orqalik stars ishlovchi bot",
      projectUrl: "https://github.com/akbaralix/SlydAi",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Telegram Bot",
      desc: "Tarixiy ma'lumotlar va jadidlar merosini zamonaviy interfeysda ko'rsatib beruvchi veb-loyiha...",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp",
      emojiAlt: "📚",
      tech: ["Node.js", "Telegram Bot API", "MongoDB"],
    },
  ];

  const projectsSort = [
    {
      id: 1,
      name: "All",
      displayName: "Hammasi",
      icon: <MdOutlineGridView />,
    },
    {
      id: 2,
      name: "Telegram Bot",
      displayName: "Telegram Botlar",
      icon: <FaTelegram />,
    },
    {
      id: 3,
      name: "Frontend Veb Ilova",
      displayName: "Frontend Ilovalar",
      icon: <FaGlobe />,
    },
    {
      id: 4,
      name: "Veb Dev & Ma'rifat",
      displayName: "Veb Dev & Ma'rifat",
      icon: <FaBookOpen />,
    },
  ];

  // 🔍 2. Loyihalarni filterlash mantiqi
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.type === activeFilter);

  return (
    <div className="projects-container">
      <SEO 
        title="Mening Loyihalarim" 
        description="Tursunboyev Akbarali - Fullstack loyihalari, telegram botlar va web-ilovalari ro'yxati. G'oyadan boshlab to toza kod va tayyor deploymentgacha."
        keywords="Tursunboyev Akbarali loyihalari, telegram botlar, react loyihalar, portfolio projects"
      />
      {/* 🚀 Sektor Sarlavhasi */}
      <div className="projects-header">
        <h1 className="projects-main-title">Mening Loyihalarim</h1>
        <p className="projects-subtitle">
          G'oyadan boshlab to toza kod va tayyor deploymentgacha bo'lgan raqamli
          ijod namunalarim.
        </p>
      </div>

      <div className="projects-sord-grid">
        {projectsSort.map((sort) => (
          <div className="projects-sord" key={sort.id}>
            <button
              onClick={() => setActiveFilter(sort.name)}
              className={activeFilter === sort.name ? "active-sort-btn" : ""}
            >
              {sort.icon} <span>{sort.displayName}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>

              {/* Karta tepasi: Telegram 3D Emojisi va Turi */}
              <div className="project-card-top">
                <picture className="project-tg-emoji">
                  <source srcSet={project.emoji} type="image/webp" />
                  <img
                    src={project.emoji.replace(".webp", ".gif")}
                    alt={project.emojiAlt}
                  />
                </picture>
                <span className="project-type">{project.type}</span>
              </div>

              {/* Karta tanasi: Nomi */}
              <div className="project-card-body">
                <h3 className="project-title-text">{project.title}</h3>
              </div>

              {/* Karta tegi: Ishlatilgan texnologiyalar */}
              <div className="project-tech-tags">
                {project.tech.map((techName, index) => (
                  <span className="tech-tag" key={index}>
                    {techName}
                  </span>
                ))}
              </div>

              {/* Tugmalar qismi */}
              <div className="projects-btn">
                <button
                  onClick={() => window.open(project.projectUrl, "_blank")}
                  className="project-btn"
                >
                  <FiExternalLink /> Loyihani ko'rish
                </button>
                <button
                  onClick={() =>
                    window.open(project.projectGithubUrl, "_blank")
                  }
                  className="project-btn-github"
                >
                  <FaGithub />
                </button>
              </div>
            </div>
          ))
        ) : (
          // 🔴 Agar tanlangan kategoriyada loyiha bo'lmasa, mana bu blok ishlaydi
          <div className="no-projects-box">
            <picture className="no-projects-emoji">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f50d/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f50d/512.gif"
                alt="🔍"
              />
            </picture>
            <h3>Bu bo'limda loyiha topilmadi</h3>
            <p>
              Hozirda ushbu yo'nalish bo'yicha yangi g'oyalar ustida
              ishlayapman. Tez orada qo'shiladi! 😉
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
