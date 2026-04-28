# Customer Management Dashboard

Add, view, and delete customers. Built with React + Express. No database — data lives in memory.

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
