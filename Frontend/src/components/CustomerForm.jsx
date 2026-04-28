import React, { useState } from "react";
import axios from "axios";
import Snackbar from "./Snackbar";

const fields = [
    { key: "name", placeholder: "Name", type: "text" },
    { key: "email", placeholder: "Email", type: "email" },
    { key: "phone", placeholder: "Phone", type: "tel" },
];

const input = { width: "1fr", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "0.95rem", outline: "none", boxSizing: "border-box" };

export default function CustomerForm({ fetchCustomers }) {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [snackbar, setSnackbar] = useState(null);

    const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(form).some((v) => !v)) {
            setSnackbar({ message: "Please fill in all fields", type: "error" });
            return;
        }
        try {
            await axios.post("https://customer-dashboard-u8nq.onrender.com/customers", form);
            setForm({ name: "", email: "", phone: "" });
            setSnackbar({ message: "Customer added successfully", type: "success" });
            fetchCustomers();
        } catch (err) {
            setSnackbar({ message: "Error adding customer: " + err, type: "error" });
        }
    };

    return (
        <>
        <div style={{  margin: "2rem auto", padding: "1.5rem 2rem", background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}>
            <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: "0.75rem", alignItems: "center" }}>
                {fields.map((f) => (
                    <input key={f.key} value={form[f.key]} onChange={update(f.key)} placeholder={f.placeholder} type={f.type} style={input} />
                ))}
                <button type="submit" style={{ padding: "10px 20px", background: "linear-gradient(135deg, #302b63, #24243e)", color: "#fff", border: "none", borderRadius: 8, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>+ Add</button>
            </form>
        </div>
        {snackbar && <Snackbar message={snackbar.message} type={snackbar.type} onClose={() => setSnackbar(null)} />}
        </>
    );
}