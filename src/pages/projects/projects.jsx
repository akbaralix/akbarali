import React, { useState } from "react";
import { FaGithub, FaTelegram, FaGlobe, FaBookOpen } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineGridView } from "react-icons/md";
import { CloseButton } from "../../components/Button";

import taxiImg from "../../assets/taxi.jpg";
import profilmImg from "../../assets/profilm.png";
import slydAiImg from "../../assets/SlydAI.jpg";
import akaStarImg from "../../assets/AkaStar.jpg";
import SEO from "../../components/SEO";
import ImageZoom from "../../components/ImageZoom";

import "./projects.css";

function Projects() {
  // 🎯 1. Tanlangan kategoriyani saqlash uchun state (Boshida "All" - ya'ni hammasi)
  const [activeFilter, setActiveFilter] = useState("All");
  const [zoomedProject, setZoomedProject] = useState(null);
  const [detailedProject, setDetailedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      img: taxiImg,
      title: "Telegramda taksi bot",
      projectUrl: "https://t.me/OzimizniTaksiBot",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Telegram Bot",
      desc: "Ko'pincha qishloq joylarda taksilarga qo'ngiroq qilib manzilni tushuntrish qiyin bo'lar edi. Men bunga yechim sifatida Telegramda Taxi botini yaratdim. Bo't qanday ishlaydi? Siz botga kirganingizda telefon raqamingiz va siz driver yoki yo'lovchi bo'lishingiz so'raladi va siz tanlagan tanlov malumotlar bazasiga saqlanadi. Agar siz yo'lovchi sifatida taksi buyurtma qilayotganingizda sizdan Manzilingiz (locatsiya) soraladi, siz manzilni berasiz va bot sizga 5km radiusdagi eng yaqin haydovchi (driver) ga sizni buyutmangizni yuboradi. ",
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
      desc: "Linklaringizni bir sahifada boshqarish uchun moljallangan web sayt. Instagram, Telegram, X, YouTube va shu kabi ijtiomiy tarmoqlardagi sahifangizni linkini qoshasiz. Sayitda siz nimalarni ko'rib tura olasiz? Siz Profilingizni ko'rish uchun kirganlar sonini, har bir linklaringizni bosganlar sonini ko'rib tura olasiz.",
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
      type: "Veb Dev & Ma'rifat",
      desc: `Sun'iy intellekt texnologiyalaridan foydalangan holda avtomatik taqdimotlar yaratishga mo‘ljallangan innovatsion Telegram bot.

Foydalanuvchi mavzu yoki matn yuborishi bilan tizim kerakli ma'lumotlarni tahlil qiladi va professional ko‘rinishdagi slaydlar uchun tayyor kontent ishlab chiqaradi.

Ta'lim, biznes va turli loyihalar uchun vaqtni sezilarli darajada tejashga yordam beradi.`,
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp",
      emojiAlt: "📚",
      tech: ["Node.js", "Telegram Bot API", "GROQ AI API", "MongoDB"],
    },

    {
      id: 4,
      img: akaStarImg,
      title: "Referal orqali stars ishlovchi bot",
      projectUrl: "https://github.com/akbaralix/SlydAi",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Telegram Bot",
      desc: `Telegram Stars ekotizimi uchun ishlab chiqilgan referal va mukofotlash tizimiga ega aqlli bot.

Foydalanuvchilar maxsus havolalari orqali yangi ishtirokchilarni taklif qilishlari va buning evaziga Stars ko‘rinishida bonuslar yig‘ishlari mumkin.

Loyiha foydalanuvchilar faolligini oshirish, auditoriyani kengaytirish va mukofotlash jarayonlarini avtomatlashtirish uchun yaratilgan.`,
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/2b50/512.webp",
      emojiAlt: "⭐",
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
              <div
                className="project-img"
                onClick={() => setZoomedProject(project)}
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
                <div
                  onClick={() => setDetailedProject(project)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 className="project-title-text">{project.title}</h3>
                </div>
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

      <ImageZoom
        src={zoomedProject?.img}
        alt={zoomedProject?.title}
        isOpen={!!zoomedProject}
        onClose={() => setZoomedProject(null)}
      />

      {detailedProject && (
        <div
          className="project-detail-overlay"
          onClick={() => setDetailedProject(null)}
        >
          <CloseButton
            className="close-detail-outside-btn"
            onClick={() => setDetailedProject(null)}
          />
          <div
            className="project-detail-modal apple-glass"
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
              {detailedProject.tech.map((t, i) => (
                <span key={i} className="tech-tag">
                  {t}
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
