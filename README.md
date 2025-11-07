# AuthCore - Authentication System
Full-stack authentication system that allows user to securely register, login, delete account and access protected pages/routes.


[Demo](https://authcore-app.netlify.app)


# Features
- Registration.
- Secure login with JWT / logout.
- Protected routes (frontend / backend).
- Delete account.
- Dashboard to list users.
- Multilingual (ar / en).
- Dark/light mode.
- Fully responsive.
- Modern UI/UX.


# Tech stack

### Frontend (Client)
- React.js with vite.
- react-router-dom
- Redux toolkit (RTK Query).
- i18next for internatoinalization.
- CSS modules (to prevent conflicts).

### Backend (Server)
- Node.js with Express.js framework.
- MongoDB with mongoose.
- JWT for authentication tokens.
- bcrypt for password hashing.


# API Endpoints

### Base URL
```
http://localhost:5000
```

**Register User**
```http
POST /auth/register
Content-Type: application/json

{
    "first_name": "Ahmed",
    "last_name": "Elmarghany",
    "email": "ahmed@mail.com",
    "password": "123456A"
}
```

**Login User**
```http
POST /auth/login
Content-Type: application/json

{
    "email": "Salma@mail.com",
    "password": "123456"
}
```


**Get Refresh token**
```http
GET /auth/refresh
Content-Type: application/json

Authorization: jwt
```

**Logout User**
```http
POST /auth/logout
that method delete jwt cookie
```

**Get All Users** (Protected)
```http
GET /users
Authorization: Bearer {token}
```

**Delete Current User Account** (Protected)
```http
DELETE /users/deleteCurrentUser
Authorization: Bearer {token}
```

# Get started

### 1- Prerequisites
You have to install:
- **Node.js** (v18.0 or higher)
- **npm**
### 2- Installation
Frontend:
```bash
   npm install
```
Backend:
```bash
   cd server
   npm install
```
### 3- Add .env files:
Frontend: 
```env
VITE_NODE_ENV = development

VITE_BASE_URL = http://localhost:5000
```
Backend (in /server folder):
```env
DATABASE_URI = "your mongoDB URI"

NODE_ENV = "development"

ACCESS_TOKEN_SECRET = "generate rand openssl -base64 32"

REFRESH_TOKEN_SECRET = "generate rand openssl -base64 32"
```

### 4- Running the Application:
1- Frontend:
```bash
   npm run dev
```
client will run on `http://localhost:5173`
2- Backend:
```bash
   cd server
   npm run dev
```
server will run on `http://localhost:5000`

open your browser then navigate to `http://localhost:5173`

<img width="1920" height="869" alt="dark mode en" src="https://github.com/user-attachments/assets/9574d4e6-6c85-4ebb-8cba-ea3bade4333b" />


<img width="1920" height="868" alt="light mode ar" src="https://github.com/user-attachments/assets/2be0bd2f-d9b2-4203-a9dd-df4fc7763746" />


<img width="1920" height="868" alt="signup" src="https://github.com/user-attachments/assets/8b1cd860-8c70-44fd-a51b-032f035ef4e1" />

<img width="1920" height="868" alt="dashboard" src="https://github.com/user-attachments/assets/48e0b66d-9818-46f1-9492-30235690553d" />
