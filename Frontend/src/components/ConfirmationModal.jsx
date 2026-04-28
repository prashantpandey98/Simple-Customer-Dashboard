import React from "react";

export default function ConfirmModal({
  show,
  onConfirm,
  onCancel,
  title,
  subtitle,
}) {
  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={onConfirm}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "0.5rem",
            }}
          >
            Delete
          </button>
          <button
            onClick={onCancel}
            style={{ background: "gray", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
