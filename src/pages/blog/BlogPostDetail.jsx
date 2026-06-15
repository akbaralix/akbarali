import React, { useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "./blogPost";
import { IoArrowBackOutline, IoClose } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

function BlogPostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isZoomed, setIsZoomed] = useState(false);

  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isDragging = useRef(false);
  const startY = useRef(0);

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: "50px", color: "#fff", textAlign: "center" }}>
        <h2>Maqola topilmadi!</h2>
        <Link to="/blog" style={{ color: "#007bff" }}>
          Blogga qaytish
        </Link>
      </div>
    );
  }

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startY.current = e.touches ? e.touches[0].clientY : e.clientY;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentY = e.touches ? e.touches[0].clientY : e.clientY;
    const diffY = currentY - startY.current;

    setTranslateY(diffY);

    const newOpacity = Math.max(0.3, 1 - Math.abs(diffY) / 400);
    setOpacity(newOpacity);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    // Agar 120px dan ko'proq tepaga yoki pastga tortilgan bo'lsa - yopiladi
    if (Math.abs(translateY) > 120) {
      closeZoom();
    } else {
      // Aks holda joyiga silliq qaytadi
      setTranslateY(0);
      setOpacity(1);
    }
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setTranslateY(0);
    setOpacity(1);
  };

  return (
    <div className="blog-post">
      <button className="back-btn" onClick={() => navigate("/blog")}>
        <IoArrowBackOutline />
      </button>

      <div className="blog-post-header">
        <h2>{post.title}</h2>

        <p>
          <FaRegClock />
          {post.date}
        </p>
      </div>

      {/* Rasmni bosganda kattalashadi */}
      <div className="post-img" onClick={() => setIsZoomed(true)}>
        <img src={post.img} alt="" style={{ cursor: "zoom-in" }} />
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

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
          {/* Yopish tugmasi */}
          <button className="zoom-close-btn" onClick={closeZoom}>
            <IoClose />
          </button>

          <div
            className="zoom-image-wrapper"
            style={{
              transform: `translateY(${translateY}px)`,
              transition: isDragging.current
                ? "none"
                : "transform 0.3s ease, opacity 0.3s ease",
            }}
            onMouseDown={handleTouchStart}
            onTouchStart={handleTouchStart}
          >
            <img
              src={post.img}
              alt="Zoomed"
              draggable="false" /* Brauzerning default drag'ini o'chiramiz */
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogPostDetail;
