# RESTful API for User Profile Management

## 📌 Project Overview
This project is a **RESTful API** that allows users to **register, create profiles, retrieve profiles, and update their data**. The API is built with **Node.js, Express, MongoDB**, and features **JWT authentication** for secure access.

## 🚀 Features
- **User Registration** (Sign Up)
- **User Profile Retrieval** (Get Profile)
- **Profile Update** (update Profile)
- **JWT Authentication** for security
- **Protected Routes** (Users can only access their own profiles)
- **MongoDB Database** for storing user data
- **Error Handling** for smooth API performance

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Token)

---

## 🏗️ Setup Instructions
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Sitesh100/Backend_Intern.git
cd your-repo
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Setup Environment Variables
Create a **.env** file in the root directory and add the following:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=7777
```
Replace:
- `<username>` → Your MongoDB username
- `<password>` → Your MongoDB password
- `<dbname>` → Your MongoDB database name
- `your_jwt_secret_key` → A secure secret key for JWT

### 4️⃣ Start the Server
```sh
nodemon src/app.js
```
Server will run on `http://localhost:7777`

---

## 📬 API Endpoints


### 1️⃣ User Registration (Sign Up)

Endpoint: POST /registration
Request Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "johndoe@example.com",
  "password": "StrongPass@123",
  "gender": "male",
  "photoUrl": "http://example.com/profile.jpg",
  "about": "Software Engineer"
}

2️⃣ User Login

Endpoint: POST /login
Request Body:

{
  "email": "johndoe@example.com",
  "password": "StrongPass@123"
}

3️⃣ Get User Profile

Endpoint: GET /profile/view
Headers:

{
  "Authorization": "Bearer <your_jwt_token>"
}

4️⃣ Update User Profile

Endpoint: PUT /profile/update
Headers:

{
  "Authorization": "Bearer <your_jwt_token>"
}

Allowed Fields for Update:
{
  "firstName": "John",
  "lastName": "Doe",
  "about": "Updated Bio",
  "photoUrl": "http://example.com/new-profile.jpg"
}

✅ **Protected Routes:** Users can only access their own profiles.

---

Developed by **Sitesh Jha** 🚀

