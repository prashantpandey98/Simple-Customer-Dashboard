import React, { useState } from "react";
import axios from "axios";
import ConfirmModal from "./ConfirmationModal";

export default function CustomerTable({ customers, fetchCustomers }) {
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`https://customer-dashboard-u8nq.onrender.com/customers/${selectedId}`);
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
      <div className="customer-table-wrapper">
        <table className="customer-table">
          {customers.length > 0 && (
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
          )}
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <button className="btn-delete" onClick={() => handleDeleteClick(customer.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        show={showModal}
        onConfirm={handleDeleteConfirm}
        onCancel={() => setShowModal(false)}
        title="Delete customer?"
        subtitle="Are you sure you want to delete this customer? This action cannot be undone."
      />
    </>
  );
}
