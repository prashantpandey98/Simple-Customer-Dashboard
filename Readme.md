# Customer Management Dashboard

Add, view, and delete customers. Built with React + Express. No database — data lives in memory.

Added features like Loading, Deletion Confirmation Modal and Snackbar notification as well.
Have validations in place as well both on Frontend and Backend.

Enter the Name, Email and Phone Number and click on Add button to add it in the entry (POST).
The list of customers will be displayed in the table below. You can also delete a customer by clicking on the Delete button next to their entry (DELETE).

---

## Setup

Requires [Node.js](https://nodejs.org/) v18+

**Backend**
```bash
cd Backend
npm install
npm start          # http://localhost:5000
```

**Frontend**
```bash
cd Frontend
npm install
npm run dev        # http://localhost:5173
```

---

## API

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | /customers       | List all customers |
| POST   | /customers       | Add a customer     |
| DELETE | /customers/:id   | Delete a customer  |

POST body:
```json
{ "name": "Jane Doe", "email": "jane@example.com", "phone": "1234567890" }
```

---

## Tech

- **Frontend** — React 19, Axios, Vite
- **Backend** — Express 5, UUID, Validator.js
