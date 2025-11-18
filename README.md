# **Full-Stack Todo Application (React + Node + TypeScript)**

This project is a full-stack Todo application built with **React + TypeScript** on the frontend and **Node.js + Express + TypeScript + MongoDB** on the backend.
It includes user authentication and complete Todo management features.

---

## 🚀 **Features**

### ### **🔐 User Authentication**

* User Signup
* User Login
* JWT-based authentication
* Forgot Password (email link)
* Reset Password

### ### **📝 Todo Features**

* Create new tasks
* Add **title + description**
* Mark tasks as completed / not completed
* Update tasks
* Delete tasks
* View list of tasks
* Each task displays:

  * Title
  * Description
  * Completion status
  * Created date & time

### ### **💾 Database**

* MongoDB Atlas or Local MongoDB
* Separate collection for logging backend errors

### ### **🛠 Tech Stack**

#### **Frontend**

* React + TypeScript
* React Router
* Zustand (global state)
* React Query
* React Hook Form
* Zod (schema validation)
* TailwindCSS
* Axios

#### **Backend**

* Node.js + Express (TypeScript)
* JWT
* Bcrypt
* Mongoose
* Nodemailer
* dotenv

---

## 📂 **Project Structure**

```
todo-app/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── utils/
│   │   ├── db/
│   │   ├── config/
│   │   ├── app.ts
│   │   └── server.ts
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── api/
    │   ├── store/
    │   ├── hooks/
    │   ├── schemas/
    │   ├── App.tsx
    │   └── main.tsx
```

---

## ⚙️ **How to Run the Project**

### ### **Backend Setup**

```
cd backend
npm install
```

Create a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

Start backend:

```
npm run dev
```

---

### ### **Frontend Setup**

```
cd frontend
npm install
npm run dev
```

---

## 🎥 **Demo Video**

Include a screen recording showing:

* Signup / Login
* Creating a Todo
* Updating a Todo
* Listing Todos
* Deleting a Todo

Upload to Google Drive → make the link public
Paste the link here:

```
Demo Video: https://drive.google.com/…
```

---

## 📌 **Assumptions**

* Email service uses basic SMTP configuration.
* MongoDB must be running (local or Atlas).
* Reset password link is time-limited.

---

## ✔️ **Possible Future Improvements**

* Dark mode
* Better animations
* Pagination for tasks
* Role-based access
* Attachments for tasks

---

## 🙌 **Conclusion**

This project demonstrates a full-stack workflow with clean code practices, TypeScript typing, modular structure, and modern frontend tooling. It covers everything required in the assignment including authentication, form validation, API integration, state management, and UI design.


