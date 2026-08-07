import React, { useState, useMemo, useCallback } from "react";
import { FaGithub, FaTelegram, FaGlobe } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md";

import { CloseButton } from "../../components/Button";
import SEO from "../../components/SEO";
import ImageZoom from "../../components/ImageZoom";

import taxiImg from "../../assets/taxi.jpg";
import profilmImg from "../../assets/profilm.png";
import slydAiImg from "../../assets/SlydAI.jpg";
import akaStarImg from "../../assets/AkaStar.jpg";

import "./projects.css";

// 📦 Static Data (Komponent tashqarisida e'lon qilingan)
const PROJECTS_DATA = [
  {
    id: 1,
    img: taxiImg,
    title: "Telegramda taksi bot",
    projectUrl: "https://t.me/OzimizniTaksiBot",
    projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
    type: "Telegram Bot",
    desc: "Ko'pincha qishloq joylarda taksilarga qo'ngiroq qilib manzilni tushuntirish qiyin bo'lar edi. Men bunga yechim sifatida Telegramda Taxi botini yaratdim. Bot foydalanuvchi joylashuvini olib, 5km radiusdagi eng yaqin haydovchiga buyurtmani yuboradi.",
    emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f695/512.webp",
    emojiAlt: "🚖",
    tech: ["Node.js", "Telegram Bot API", "MongoDB"],
  },
  {
    id: 2,
    img: profilmImg,
    title: "Profilm",
    projectUrl: "https://profilimuz.web.app",
    projectGithubUrl: "https://github.com/akbaralix/profilm",
    type: "Frontend Veb Ilova",
    desc: "Linklaringizni bir sahifada boshqarish uchun mo'ljallangan web sayt. Instagram, Telegram, X, YouTube va boshqa ijtiomiy tarmoqlardagi sahifalaringiz havolasini bitta joyga jamlaydi hamda tashriflar va bosishlar statistikasini ko'rsatadi.",
    emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp",
    emojiAlt: "🏆",
    tech: ["React", "Vite", "JavaScript", "HTML5", "MongoDB"],
  },
  {
    id: 3,
    img: slydAiImg,
    title: "Slayd AI Bot",
    projectUrl: "https://t.me/SlydAiBot",
    projectGithubUrl: "https://github.com/akbaralix/SlydAi",
    type: "Telegram Bot",
    desc: "Sun'iy intellekt texnologiyalaridan foydalangan holda avtomatik taqdimotlar va slaydlar yaratishga mo'ljallangan innovatsion Telegram bot.",
    emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp",
    emojiAlt: "📚",
    tech: ["Node.js", "Telegram Bot API", "GROQ AI API", "MongoDB"],
  },
  {
    id: 4,
    img: akaStarImg,
    title: "Stars Referal Bot",
    projectUrl: "https://t.me/AkaStarBot",
    projectGithubUrl: "https://github.com/akbaralix/AkaStar",
    type: "Telegram Bot",
    desc: "Telegram Stars ekotizimi uchun ishlab chiqilgan referal va mukofotlash tizimiga ega aqlli bot. Taklif qilingan har bir yangi foydalanuvchi uchun mukofot beradi.",
    emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp",
    emojiAlt: "⭐",
    tech: ["Node.js", "Telegram Bot API", "MongoDB"],
  },
];

const FILTER_OPTIONS = [
  { id: 1, name: "All", displayName: "Hammasi", icon: <MdOutlineGridView /> },
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
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [zoomedProject, setZoomedProject] = useState(null);
  const [detailedProject, setDetailedProject] = useState(null);

  // 🎯 Filterlangan loyihalarni keshga olish
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS_DATA;
    return PROJECTS_DATA.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  // 🔗 Havolaga o'tish uchun xavfsiz funksiya
  const handleOpenLink = useCallback((url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <div className="projects-container">
      <SEO
        title="Mening Loyihalarim"
        description="Tursunboyev Akbarali - Fullstack loyihalari, telegram botlar va web-ilovalari ro'yxati. G'oyadan boshlab to toza kod va tayyor deploymentgacha."
        keywords="Tursunboyev Akbarali loyihalari, telegram botlar, react loyihalar, portfolio projects"
      />

      {/* 🚀 Header Sektor */}
      <header className="projects-header">
        <h1 className="projects-main-title">Mening Loyihalarim</h1>
        <p className="projects-subtitle">
          G'oyadan boshlab to toza kod va tayyor deploymentgacha bo'lgan raqamli
          ijod namunalarim.
        </p>
      </header>

      {/* 🔍 Filter Tugmalari */}
      <div className="projects-sord-grid">
        {FILTER_OPTIONS.map((filter) => (
          <div className="projects-sord" key={filter.id}>
            <button
              onClick={() => setActiveFilter(filter.name)}
              className={activeFilter === filter.name ? "active-sort-btn" : ""}
              type="button"
            >
              {filter.icon} <span>{filter.displayName}</span>
            </button>
          </div>
        ))}
      </div>

      {/* 🗂 Loyihalar Setkasi */}
      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div
                className="project-img"
                onClick={() => setZoomedProject(project)}
                role="button"
                tabIndex={0}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ cursor: "zoom-in" }}
                />
              </div>

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

              <div className="project-card-body">
                <button
                  className="project-title-btn"
                  onClick={() => setDetailedProject(project)}
                  type="button"
                >
                  <h3 className="project-title-text">{project.title}</h3>
                </button>
              </div>

              <div className="project-tech-tags">
                {project.tech.map((techName, index) => (
                  <span className="tech-tag" key={index}>
                    {techName}
                  </span>
                ))}
              </div>

              <div className="projects-btn">
                <button
                  onClick={() => handleOpenLink(project.projectUrl)}
                  className="project-btn"
                  type="button"
                >
                  <FiExternalLink /> Loyihani ko'rish
                </button>
                <button
                  onClick={() => handleOpenLink(project.projectGithubUrl)}
                  className="project-btn-github"
                  type="button"
                  aria-label="GitHub repozitoriyasini ochish"
                >
                  <FaGithub />
                </button>
              </div>
            </article>
          ))
        ) : (
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

      {/* 🔍 Rasm Kattalashtirish Modali */}
      <ImageZoom
        src={zoomedProject?.img}
        alt={zoomedProject?.title}
        isOpen={Boolean(zoomedProject)}
        onClose={() => setZoomedProject(null)}
      />

      {/* 📜 Batafsil Ma'lumot Modali */}
      {detailedProject && (
        <div
          className="project-detail-overlay"
          onClick={() => setDetailedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <CloseButton
            className="close-detail-outside-btn"
            onClick={() => setDetailedProject(null)}
          />
          <div
            className="project-detail-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={detailedProject.img}
              alt={detailedProject.title}
              className="detail-img"
            />
            <h2>{detailedProject.title}</h2>
            <span className="detail-type">{detailedProject.type}</span>
            <p className="detail-desc">{detailedProject.desc}</p>
            <div className="detail-tech">
              {detailedProject.tech.map((techItem, index) => (
                <span key={index} className="tech-tag">
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
