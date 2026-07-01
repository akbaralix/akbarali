import React, { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { usePostDetail } from "./usePosts.js"; // Serverdan ma'lumotni yuklovchi hook
import { IoArrowBackOutline, IoClose } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import SEO from "../../components/SEO";

import "react-quill-new/dist/quill.bubble.css";
import "./blog.css";

function BlogPostDetail() {
  const { slug } = useParams();
  const [isZoomed, setIsZoomed] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const { post, isLoading, error } = usePostDetail(slug);

  const navigate = useNavigate();
  const api = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // 1. Agar post hali yuklanmagan bo'lsa, funksiyani bajarishni to'xtatamiz (Xavfsiz usul)
    if (!post?._id) return;

    // 2. Agar foydalanuvchi bu postni hali KO'RMAGAN bo'lsa (shart oldiga ! qo'yildi)
    if (!document.cookie.includes(`viewed_${post._id}`)) {
      // Backendga ko'rishlar sonini oshirish uchun so'rov jo'natamiz
      fetch(`${api}/api/post/view/${post._id}`, { method: "POST" }).catch(
        (err) => console.error("Views error:", err),
      ); // Xatolikni ushlash

      // Brauzerga ushbu post ko'rilganligi haqida cookie yozamiz (24 soatga)
      document.cookie = `viewed_${post._id}=true; max-age=86400; path=/`;
    }
  }, [post?._id]); // Bu yerga ham post?._id o'rnatildi
  if (isLoading) {
    return (
      <div
        style={{ padding: "100px 20px", color: "#fff", textAlign: "center" }}
      >
        <div className="loading-spinner"></div>
        <p style={{ marginTop: "15px", opacity: 0.7 }}>
          Ma'lumot yuklanmoqda... 🔄
        </p>
      </div>
    );
  }

  // 2. Xatolik yoki Maqola umuman topilmagan holat
  if (error || !post) {
    return (
      <div
        style={{ padding: "100px 20px", color: "#fff", textAlign: "center" }}
      >
        <h2 style={{ fontWeight: "400", marginBottom: "10px" }}>
          Maqola topilmadi! ❌
        </h2>
        <Link
          to="/blog"
          style={{
            color: "#007bff",
            textDecoration: "none",
            fontSize: "0.95rem",
            borderBottom: "1px dashed #007bff",
            paddingBottom: "2px",
          }}
        >
          Blog sahifasiga qaytish
        </Link>
      </div>
    );
  }

  const handleTouchStart = (e) => {
    isDragging.current = true;
    // Telefon yoki kompyuter ekanligini aniqlab, boshlang'ich Y o'qi nuqtasini ushlaymiz
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const diffY = currentY - startY.current; // Boshlang'ich nuqtadan qanchaga surilgani

    setTranslateY(diffY);

    // Rasm markazdan qanchalik uzoqlashsa, orqa fon shunchalik ochiladi (blur kamayadi)
    const newOpacity = Math.max(0.3, 1 - Math.abs(diffY) / 400);
    setOpacity(newOpacity);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;

    if (Math.abs(translateY) > 120) {
      closeZoom();
    } else {
      setTranslateY(0);
      setOpacity(1);
    }
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setTranslateY(0);
    setOpacity(1);
  };

  const cleanDesc = post.matn ? post.matn.replace(/<[^>]*>/g, '').substring(0, 150) + "..." : "";

  return (
    <div className="blog-post">
      <SEO 
        title={post.sarlavha}
        description={cleanDesc}
        image={post.rasm}
        type="article"
      />
      <button
        className="back-btn"
        onClick={() => navigate("/blog")}
        title="Blogga qaytish"
      >
        <IoArrowBackOutline />
      </button>
      <p>{post.korildi}</p>

      {/* 📑 Maqola Sarlavhasi va Sanasi */}
      <div className="blog-post-header">
        <h2>{post.sarlavha}</h2>
        <p className="post-date">
          <FaRegClock />
          {new Date(post.data).toLocaleDateString("uz-UZ", {})}
        </p>
      </div>

      {/* 🖼️ Asosiy Rasm (Bosganda kattalashadi) */}
      <div className="post-img" onClick={() => setIsZoomed(true)}>
        <img
          src={post.rasm}
          alt={post.sarlavha}
          style={{ cursor: "zoom-in" }}
        />
      </div>

      {/* 📝 Rich Text (React Quill) matnini hamma stillari bilan xavfsiz render qilish */}
      <div className="post-content ql-editor">
        <div dangerouslySetInnerHTML={{ __html: post.matn }} />
      </div>

      {/* 🌌 KATTALASHTIRILGAN RASM MODAL OYNASI (TELEGRAM EFFECT) */}
      {isZoomed && (
        <div
          className="image-zoom-overlay"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${opacity * 0.85})`,
            backdropFilter: `blur(${opacity * 20}px)`,
            WebkitBackdropFilter: `blur(${opacity * 20}px)`,
          }}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Yopish 'X' tugmasi */}
          <button className="zoom-close-btn" onClick={closeZoom}>
            <IoClose />
          </button>

          {/* Sudraluvchi konteyner wrapper */}
          <div
            className="zoom-image-wrapper"
            style={{
              transform: `translateY(${translateY}px)`,
              transition: isDragging.current
                ? "none"
                : "transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease",
            }}
            onMouseDown={handleTouchStart}
            onTouchStart={handleTouchStart}
          >
            <img
              src={post.rasm}
              alt="Zoomed Content"
              draggable="false" /* Brauzerning rasmni ko'chiradigan default drag'ini o'chiramiz */
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogPostDetail;
