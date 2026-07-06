import React, { useState, useRef } from "react";
import { CloseButton } from "./Button";

const ImageZoom = ({ src, alt, isOpen, onClose }) => {
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const isDragging = useRef(false);
  const startY = useRef(0);

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

    if (Math.abs(translateY) > 120) {
      handleClose();
    } else {
      setTranslateY(0);
      setOpacity(1);
    }
  };

  const handleClose = () => {
    setTranslateY(0);
    setOpacity(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
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
      <CloseButton className="zoom-close-btn" onClick={handleClose} />

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
          src={src}
          alt={alt || "Zoomed Content"}
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ImageZoom;
