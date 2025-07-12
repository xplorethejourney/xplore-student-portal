# 🛠️ Backend Setup Guide

This document outlines the steps to set up and run the backend application built with **Node.js**, **Express**, **Mongoose**, and **MongoDB**.

---

## 📋 Prerequisites

Make sure the following tools are installed on your machine:

- **Node.js** (v16 or higher)  
- **pnpm** (comes with Node.js)  
- **MongoDB** (local or MongoDB Atlas)  
- **Git** (optional, for cloning)  
- **Gmail account** with an App Password (for Nodemailer)

---

## 🚀 Setup Instructions

### 1. Clone the Repository

If using Git:

```bash
git clone https://github.com/xplorethejourney/xplore-student-portal.git
cd server
```

Or manually copy the backend code into a directory of your choice.

---

### 2. Install Dependencies

Navigate to the project directory and run:

```bash
pnpm install
```

> This installs the required packages, including:

- `express`: Web framework
- `mongoose`: MongoDB ODM
- `jsonwebtoken`: JWT handling
- `bcrypt`: Password hashing
- `nodemailer`: Email sending
- `dotenv`: Environment variable management

---

### 3. Configure Environment Variables

Modify the  file called `.env.prod` in the root directory:

```env
PORT=8989
MONGO_URL=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>
GMAIL_ID=<your-gmail-address>
GMAIL_APP_PASS=<your-gmail-app-password>
FRONTEND_LINK=<frontend-url>
```

#### Description of Variables:

- `PORT`: Port number for the backend server (e.g., `8989`)
- `MONGO_URL`: MongoDB connection string  
****  - Atlas: `<Your_Atlas_URI>`
- `JWT_SECRET`: Secure secret for JWT signing  
  > Generate one with:
  ```js
  require('crypto').randomBytes(64).toString('hex')
  ```
- `GMAIL_ID`: Gmail used for Nodemailer  
- `GMAIL_APP_PASS`: App Password from Gmail account  
  > Follow this [link](https://www.youtube.com/watch?v=N_J3HCATA1c) to generate App Password in Gmail 
- `FRONTEND_LINK`: URL of frontend 
  > Use `http://localhost:8989` for running locally
---

### 4. Start MongoDB



Use **MongoDB Atlas**, ensure your `MONGO_URL` is valid and your IP is whitelisted.

---

### 5. Run the Application

To start the backend server in production mode:

```bash
pnpm run dev
```



On success, the console should show something like:

```
Server listening on port 8989
MONGOOO.... 
```

---

### 6. API Endpoints

Base URL: `http://localhost:8989/api/auth`

| Method | Endpoint                                  | Description                              |
|--------|-------------------------------------------|------------------------------------------|
| POST   | `/signup`                                 | Register new user + send verification    |
| POST   | `/signin`                                 | User login + receive JWT token           |
| POST   | `/signout`                                | Logout by clearing token cookie          |
| DELETE | `/delete`                                 | Delete user by email   Only for Testing Purpose **NOT FOR PRODUCTION**                  |
| GET    | `/signup/verify`                          | Verify user email via JWT token          |
| POST   | `/signin/requestPasswordReset`            | Send password reset email                |
| POST   | `/signin/PasswordReset`                   | Reset password using JWT token           |

---

### 7. Testing the Application

Use **Postman** or **cURL** to test API endpoints.

- Frontend must be running and properly configured to consume backend API via `FRONTEND_LINK`.
- Check Gmail's **Sent Mail** and the recipient’s inbox/spam for verification and reset links.

---

### 8. Troubleshooting

| Issue                        | Fix                                                                 |
|-----------------------------|----------------------------------------------------------------------|
| MongoDB connection error    | Ensure `mongod` is running or Atlas URL is valid                     |
| Email not sent              | Double-check `GMAIL_ID` and `GMAIL_APP_PASS`, check Gmail security   |
| JWT verification issues     | Make sure `JWT_SECRET` is consistent everywhere                     |
| Port already in use         | Change `PORT` in `.env.prod` or kill process on that port            |

---

### 9. 🔒 Additional Notes

- Passwords are hashed using `bcrypt`.
- Authentication is handled using `jsonwebtoken`.
- The backend relies on correct values in the `.env.prod` file — do not hardcode credentials.
- For **production**, consider:
  - HTTPS setup (using reverse proxy or certs)
  - CORS configuration
  - Rate limiting / request throttling
  - Security headers (via Helmet.js)
  - Logging (e.g., Winston, Morgan)