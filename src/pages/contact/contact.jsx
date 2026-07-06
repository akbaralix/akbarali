import React, { useState } from "react";
import { CloseButton } from "../../components/Button";
import SEO from "../../components/SEO";

import "./contact.css";

function Contact() {
  const [contactMsg, setContactMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const botToken = import.meta.env.VITE_BOT_TOKEN;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const xabar = `📩 Yangi xabar!
👤 Ism: ${formData.name}
✉️ Email: ${formData.email}
💬 Xabar: ${formData.message}
  `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: "907402803",
            text: xabar,
            parse_mode: "HTML",
          }),
        },
      );
    } catch (error) {
      console.error("Xabar yuborishda xatolik yuz berdi:", error);
    }

    setContactMsg(true);

    setFormData({ name: "", email: "", message: "" });
  };

  const ContactSendMsg = () => {
    return (
      <div className="contact-message-overlay">
        <CloseButton
          className="close-btn contact-message-close-btn"
          onClick={() => setContactMsg(false)}
        />
        <div className="contact-message">
          <picture className="success-tg-emoji">
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
              alt=""
            />
          </picture>
          <h2>Xabaringiz Yuborildi!</h2>
          <p>
            So'rovingiz qabul qilindi! Agar masalangiz juda shoshilinch bo'lsa,{" "}
            <a
              href="https://t.me/akbaral1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram orqali
            </a>{" "}
            to'g'ridan-to'g'ri yozishingiz ham mumkin — u yerda doim onlaynman.
            📡
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="contact-container">
      <SEO
        title="Aloqa"
        description="Tursunboyev Akbarali bilan bog'lanish. Savollar, loyihalar va hamkorlik takliflari bo'yicha bu yerda xabar qoldirishingiz mumkin."
        keywords="Tursunboyev Akbarali aloqa, Akbarali bilan bog'lanish, dasturchi kontakt, hamkorlik"
      />
      {contactMsg && <ContactSendMsg />}

      <div className="contact-header">
        <h1 className="contact-main-title">
          Men bilan aloqa
          <picture className="contact-tg-emoji">
            <source
              srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.webp"
              type="image/webp"
            />
            <img
              src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.gif"
              alt="📩"
              width="45"
              height="45"
            />
          </picture>
        </h1>
        <p className="contact-subtitle">
          Yangi loyihalar, takliflar yoki shunchaki dasturlash haqida
          suhbatlashish uchun xabar qoldiring.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <a
            href="https://t.me/akbaral1"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card tg-card"
          >
            <picture className="card-emoji">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                alt="📩"
              />
            </picture>
            <div className="card-text">
              <h4>Telegram</h4>
              <p>@akbaral1</p>
              <span>Tezkor aloqa va g'oyalar suhbati ⚡</span>
            </div>
          </a>
          <a
            href="https://github.com/akbaralix"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card gh-card"
          >
            <picture className="card-emoji">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bb/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4bb/512.gif"
                alt="💻"
              />
            </picture>
            <div className="card-text">
              <h4>GitHub</h4>
              <p>github.com/akbaralix</p>
              <span>Yozgan kodlarim va ochiq manbalar 🚀</span>
            </div>
          </a>
          <div className="contact-card loc-card">
            <picture className="card-emoji">
              <source
                srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.webp"
                type="image/webp"
              />
              <img
                src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
                alt="📍"
              />
            </picture>
            <div className="card-text">
              <h4>Joylashuv</h4>
              <p>O'zbekiston, Andijon</p>
              <span>Masofadan (Remote) turib ishlash imkoniyati 🌍</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Ismingiz</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Ismingiz"
              />
            </div>

            <div className="form-group">
              <label>Email manzilingiz</label>
              <input
                type="type"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@gmail.com"
              />
            </div>

            <div className="form-group">
              <label>Xabaringiz</label>
              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Loyiha haqida batafsil yozishingiz mumkin..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Xabarni Yuborish
              <picture className="btn-emoji">
                <source
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.webp"
                  type="image/webp"
                />
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f680/512.gif"
                  alt="🚀"
                  width="20"
                  height="20"
                />
              </picture>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
