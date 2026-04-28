import React from "react";

export default function ConfirmModal({ show, onConfirm, onCancel, title, subtitle }) {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="modal-actions">
          <button className="btn-delete" onClick={onConfirm}>Delete</button>
          <button className="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
