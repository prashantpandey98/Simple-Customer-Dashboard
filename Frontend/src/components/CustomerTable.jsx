import React, { useState } from "react";
import axios from "axios";
import ConfirmModal from "./ConfirmationModal";

export default function CustomerTable({ customers, fetchCustomers }) {
  const cellStyle = {
    textAlign: "left",
    padding: "8px",
    borderBottom: "1px solid #ddd",
  };
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:5000/customers/${selectedId}`);
      fetchCustomers();
    } catch (err) {
      console.log("Error deleting customer:", err);
    } finally {
      setShowModal(false);
      setSelectedId(null);
    }
  };

  return (
    <>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Phone</th>
            <th style={cellStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td style={cellStyle}>{customer.name}</td>
              <td style={cellStyle}>{customer.email}</td>
              <td style={cellStyle}>{customer.phone}</td>
              <td style={cellStyle}>
                <button
                  onClick={() => handleDeleteClick(customer.id)}
                  style={{ background: "red", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmModal
        show={showModal}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setShowModal(false)}
        title={"Delete customer?"}
        subtitle={
          "Are you sure you want to delete this customer? This action cannot be undone."
        }
      />
    </>
  );
}
