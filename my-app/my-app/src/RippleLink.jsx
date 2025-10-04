import React, { useState } from "react";
import "./Ripple.css";

export default function RippleLink({ href, children, style }) {
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const link = e.currentTarget;
    const rect = link.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 500);
  };

  return (
    <a href={href} onClick={createRipple} className="ripple-link" style={style}>
      {children}
      {ripples.map((r) => (
        <span
          key={r.key}
          className="ripple"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </a>
  );
}
