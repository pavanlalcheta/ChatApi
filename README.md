# Chat Backend – REST + Socket.io

A real-time chat backend built using **Node.js, Express, MongoDB, and Socket.io**.  
This project supports user creation, message persistence, real-time messaging, and API documentation using Swagger.

---

## 🚀 Features

- User creation & listing
- Send and fetch messages between users
- Real-time message broadcasting using Socket.io
- MongoDB persistence with timestamps
- Swagger API documentation
- No frontend required (tested via browser socket client)

---

## 📘 API Documentation (Swagger)

Swagger UI is available at:

http://localhost:3000/api-docs

It provides:
- Interactive API documentation
- Request & response schemas
- Browser-based API testing


## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.io
- Swagger (swagger-ui-express, swagger-jsdoc)

---

## 📂 Project Structure

    chat-backend/
    │── server.js
    │── .env
    │── config/
    │ └── db.js
    │── models/
    │ ├── User.js
    │ └── Message.js
    │── routes/
    │ ├── userRoutes.js
    │ └── messageRoutes.js
    │── controllers/
    │ ├── userController.js
    │ └── messageController.js
    │── socket/
    │ └── socket.js
    │── swagger/
    │ └── swagger.js


1️⃣ Clone Repository

```bash
git clone https://github.com/pavanlalcheta/ChatApi.git
cd ChatApi 

2️⃣ Install Dependencies

npm install

3️⃣ Environment Variables

Create .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4️⃣ Start Server

node server.js

📬 API Endpoints

Users

POST /api/users → Create user

GET /api/users → List users

Messages

POST /api/messages → Send message

GET /api/messages?sender=A&receiver=B → Fetch messages
