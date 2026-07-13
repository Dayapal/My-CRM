# Role-Based CRM System

A full-stack **Customer Relationship Management (CRM)** application built using the **MERN Stack**. This project provides secure authentication, role-based access control, and customer management features to help businesses efficiently manage leads, customers, and daily operations.

## 🚀 Features


- 🔐 JWT Authentication & Authorization
- 👥 Role-Based Access Control (Admin, Manager, Sales Executive)
- 👤 User Management
- 📋 Customer & Lead Management
- 📞 Follow-up Tracking
- 📊 Interactive Dashboard
- 🔍 Search, Filter & Pagination
- 📅 Task & Activity Management
- 📱 Fully Responsive UI
- ⚡ RESTful APIs
- 🛡️ Protected Routes

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS / Bootstrap

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database
- MongoDB
- Mongoose

## 📂 Project Structure

```
crm-system/
│
├── client/          # React Frontend
│
├── server/          # Express Backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── config/
│
├── .env
├── package.json
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### Navigate to the project

```bash
cd your-repository
```

### Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd ../client
npm install
```

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
```

## 📸 Screenshots

Add screenshots of:
- Login Page
- Dashboard
- Customer Management
- User Management
- Reports

## 📌 Future Improvements

- Email Notifications
- File Uploads
- CRM Analytics
- Calendar Integration
- Export Reports (PDF/Excel)
- Real-time Notifications

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.

## 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
