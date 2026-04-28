import React, { useState } from "react";
import axios from "axios";
import Snackbar from "./Snackbar";

const fields = [
    { key: "name", placeholder: "Name", type: "text" },
    { key: "email", placeholder: "Email", type: "email" },
    { key: "phone", placeholder: "Phone", type: "tel" },
];

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
        <div className="form-card">
            <form onSubmit={handleSubmit} className="customer-form">
                {fields.map((f) => (
                    <input key={f.key} value={form[f.key]} onChange={update(f.key)} placeholder={f.placeholder} type={f.type} />
                ))}
                <button type="submit" className="btn-add">+ Add</button>
            </form>
        </div>
        {snackbar && <Snackbar message={snackbar.message} type={snackbar.type} onClose={() => setSnackbar(null)} />}
        </>
    );
}
