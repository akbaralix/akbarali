import React from "react";
import { FaGithub } from "react-icons/fa";

import "./projects.css";

function Projects() {
  const projectsData = [
    {
      id: 1,
      img: "/src/assets/taxi.jpg",
      title: "OzimizniTaksiBot",
      projectUrl: "https://t.me/OzimizniTaksiBot",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Telegram Bot & Avtomatizatsiya",
      desc: "Mintaqaviy transport muammolarini hal qilish uchun ishlab chiqilgan maxsus taxi-hailing boti. Unda foydalanuvchilar real vaqt rejimida joylashuv orqali buyurtma bera oladilar, haydovchilar esa xavfsiz va tezkor buyurtmalarni qabul qilishadi. Tizim to'liq anti-spam va xavfsizlik filtrlari bilan himoyalangan.",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f695/512.webp", // 🚖 Taxi emoji
      emojiAlt: "🚖",
      tech: ["Python", "Telethon", "API", "Databases"],
    },
    {
      id: 2,
      img: "/src/assets/taxi.jpg",
      title: "Guruh G'olibi ",
      projectUrl: "https://t.me/OzimizniTaksiBot",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Frontend Veb Ilova",
      desc: "Institut tadbiri uchun maxsus yozilgan, yuqori tezlikda ishlovchi dinamik veb-sayt. Ushbu loyihaning zamonaviy UI/UX dizayni va toza kodi guruhimizga tadbirda mutloq 1-o'rinni olib kelishida asosiy omil bo'ldi.",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3c6/512.webp", // 🏆 Trophy emoji
      emojiAlt: "🏆",
      tech: ["React", "Vite", "JavaScript", "HTML5", "CSS3"],
    },
    {
      id: 3,
      img: "/src/assets/taxi.jpg",
      title: "Jadidlar Zamonaviy Platformasi",
      projectUrl: "https://t.me/OzimizniTaksiBot",
      projectGithubUrl: "https://github.com/akbaral1/OzimizniTaksiBot",
      type: "Veb Dev & Ma'rifat",
      desc: "Tarixiy ma'lumotlar va jadidlar merosini zamonaviy interfeysda ko'rsatib beruvchi veb-loyiha. GitHub va Vercel orqali avtomatik deployment (CI/CD) qilingan, yuklanish tezligi maksimal darajada optimallashtirilgan platforma.",
      emoji: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4da/512.webp", // 📚 Books emoji
      emojiAlt: "📚",
      tech: ["React", "Vite", "Vercel", "GitHub"],
    },
  ];

  return (
    <div className="projects-container">
      {/* 🚀 Sektor Sarlavhasi */}
      <div className="projects-header">
        <h1 className="projects-main-title">Mening Loyihalarim</h1>
        <p className="projects-subtitle">
          G'oyadan boshlab to toza kod va tayyor deploymentgacha bo'lgan raqamli
          ijod namunalarim.
        </p>
      </div>

      {/* 💻 Loyihalar Gridi */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-img">
              <img src={project.img} alt="" />
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

            {/* Karta tanasi: Nomi va Tarifi */}
            <div className="project-card-body">
              <h3 className="project-title-text">{project.title}</h3>
              {/* <p className="project-desc-text">{project.desc}</p> */}
            </div>

            {/* Karta tegi: Ishlatilgan texnologiyalar (Badges) */}
            <div className="project-tech-tags">
              {project.tech.map((techName, index) => (
                <span className="tech-tag" key={index}>
                  {techName}
                </span>
              ))}
            </div>
            <div className="projects-btn">
              <button
                onClick={() => (window.location.href = project.projectUrl)}
                className="project-btn"
              >
                Loyihani ko'rish
              </button>
              <button
                onClick={() =>
                  (window.location.href = project.projectGithubUrl)
                }
                className="project-btn-github"
              >
                <FaGithub />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
