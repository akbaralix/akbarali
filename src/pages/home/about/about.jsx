import React from "react";
import "./about.css";

function About() {
  const timelineData = [
    {
      year: "2024",
      title: "Dasturlashga Ilk Qadam",
      desc: "2 oylik IT kursida poydevor bilimlarni oldim va keyinchalik o'z ustimda tinimsiz, mustaqil ishlashni boshladim. Ilk sodda loyihalarimni aynan shu yili yaratdim.",
    },
    {
      year: "2025",
      title: "Full-Stack Sari Harakat",
      desc: "Faqat Frontend (vizual qism) bilan cheklanib qolmay, tizimlarning ichki arxitekturasi — Backend qanday ishlashini o'rganishga sho'ng'idim va Full-Stack Dasturchi bo'lishni tanladim.",
    },
    {
      year: "2026",
      title: "Yutuqlar va Haqiqiy Yechimlar",
      desc: "Bugungi kunda o'rgangan texnologiyalarim orqali real muammolarga yechim topa olaman. Yaqinda institutimizda bo'lib o'tgan tadbirda o'zim nol qilib qurgan saytim tufayli guruhimiz bilan faxrli 1-o'rinni qo'lga kiritdik.",
    },
  ];

  return (
    <div className="about-container">
      {/* 👤 1. Asosiy Tanishtiruv Seksiyasi */}
      <div className="about-hero">
        <h1 className="about-title">Men Haqimda</h1>
        <div className="about-grid">
          <div className="about-bio">
            <h3>
              Men Akbarali — Muammolarga Raqamli Yechim Topuvchi Muhandis.
            </h3>
            <p>
              Texnologiyalar olamiga qiziqishim oddiy qiziqishdan boshlanib,
              bugungi kunda Full-Stack yo'nalishidagi mustahkam ko'nikmalarga
              aylandi. Men uchun dasturlash — shunchaki kod yozish emas, balki
              atrofimizdagi muammolarni yengillashtiradigan asbob-uskunalar va
              tizimlarni yaratishdir.
            </p>
            <p>
              Men qishloq sharoitida yashab, internet va zamonaviy
              texnologiyalar yordamida har kuni o'z ustimda ishlayman.
              Institutdagi o'qishim va kundalik hayotimni dasturlash bilan
              ajoyib tarzda muvozanatda ushlab turishga harakat qilaman.
            </p>
          </div>

          <div className="about-philosophy">
            <div className="philosophy-card">
              <h5>🎯 Mening Prinsiplarim</h5>
              <ul>
                <li>
                  <strong>Raqamli Balans:</strong> Ijtimoiy tarmoqlardagi
                  "reels" va foydasiz kontentlardan uzoqlashib, vaqtni faqat
                  produktiv ishlarga sarflash.
                </li>
                <li>
                  <strong>Toza Kod:</strong> Yozgan kodim kelajakda boshqalar
                  uchun ham tushunarli va silliq ishlashi shart.
                </li>
                <li>
                  <strong>Doimiy Harakat:</strong> Yangi tillar, ma'lumotlar
                  bazalari va hayotiy ko'nikmalarni (masalan, haydash)
                  o'rganishdan to'xtamaslik.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ⏳ 2. Mening Yo'lim (Timeline) */}
      <div className="about-timeline-section">
        <h2 className="timeline-main-title">Mening Rivojlanish Yo'lim</h2>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
