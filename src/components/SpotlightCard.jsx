import React, { useRef } from "react";
import "./SpotlightCard.css";

export default function SpotlightCard({
  children,
  color = "rgba(99, 102, 241, 0.35)", // Odatiy rang (binafsha)
  className = "",
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      style={{ "--spotlight-color": color }}
    >
      <div className="spotlight-content">{children}</div>
    </div>
  );
}
