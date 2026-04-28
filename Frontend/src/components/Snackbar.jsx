import React, { useEffect } from "react";

export default function Snackbar({ message, type, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => onClose?.(), 3000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;
  const bg = type === "error" ? "red" : "green";
  return (
    <div style={{
      position: "fixed", bottom: "20px", right: "20px",
      background: bg, color: "white", padding: "10px 20px",
      borderRadius: "5px", zIndex: 1000
    }}>
      {message}
    </div>
  );
}
