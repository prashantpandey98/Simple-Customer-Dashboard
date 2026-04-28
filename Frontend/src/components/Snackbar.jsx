import React, { useEffect } from "react";

export default function Snackbar({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => onClose?.(), 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="snackbar" style={{ background: type === "error" ? "red" : "green" }}>
      {message}
    </div>
  );
}
