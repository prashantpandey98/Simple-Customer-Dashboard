const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const app = express();
app.use(cors());
app.use(express.json());

let customers = [];

app.post("/customers", (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).json({ error: "All fields are required." });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({error: "Invalid email format." });
    }
     if (!validator.isMobilePhone(phone, "any")) {
    return res.status(400).json({ error: "Invalid phone number" });
  }
    const newCustomer = { id : uuidv4(), name, email, phone };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})

app.get("/customers", (req, res) => {
    res.status(200).json(customers);
});

app.delete("/customers/:id", (req, res) => {
    const { id } = req.params;
    const customerFound = customers.some(customer => customer.id === id);
    if (!customerFound) {
        res.status(404).json({error:"Customer not found."});
    }
    
    customers = customers.filter(customer => customer.id !== id);
    res.status(200).json({ message: "Customer deleted successfully." });
});

const PORT = 5000;
app.listen(PORT, ()=>(console.log(`Server is running on port ${PORT}`)) )