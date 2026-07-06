import React from "react";
import { IoClose } from "react-icons/io5";

export function Button({ children, onClick, className, disabled, type = "button" }) {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export function CloseButton({ onClick, className = "", ...props }) {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      {...props}
    >
      <IoClose />
    </button>
  );
}

export default Button;

