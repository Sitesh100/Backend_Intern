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
```sh
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
```
```sh
Response Body:
{
    "message": "User registered successfully"
}
```
2️⃣ User Login

Endpoint: POST /login
```sh
Request Body:

{
  "email": "johndoe@example.com",
  "password": "StrongPass@123"
}
```
```sh
Response:
{
    "message": "User logged in successfully",
    "data": {
        "_id": "67e7aca9c9015b1f5694dac4",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "$2b$10$ShDcSBUsXvQ2IsXEE/w0cev1fbXMMyMvutwcxBiwf2aRW95ewmmnO",
        "gender": "male",
        "photoUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "about": "this is dummy about data ...",
        "__v": 0
    }
}
```
3️⃣ Get User Profile

Endpoint: GET /profile/view
```sh
Headers:

{
  "Authorization": "Bearer <your_jwt_token>"
}
```
```sh
Response:
{
    "message": "User Profile",
    "user": {
        "_id": "67e7aca9c9015b1f5694dac4",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "$2b$10$ShDcSBUsXvQ2IsXEE/w0cev1fbXMMyMvutwcxBiwf2aRW95ewmmnO",
        "gender": "male",
        "photoUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "about": "this is dummy about data ...",
        "__v": 0
    }
}
```
4️⃣ Update User Profile

Endpoint: PUT /profile/update
```sh
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
```
```sh
Request Body:

{
 "about": "updated Software Engineer bio"
}
```
```sh
Response:
{
    "message": "User Profile Updated",
    "user": {
        "_id": "67e7aca9c9015b1f5694dac4",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "$2b$10$ShDcSBUsXvQ2IsXEE/w0cev1fbXMMyMvutwcxBiwf2aRW95ewmmnO",
        "gender": "male",
        "photoUrl": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "about": "updated Software Engineer bio",
        "__v": 0
    }
}
```
✅ **Protected Routes:** Users can only access their own profiles.

---

Developed by **Sitesh Jha** 🚀

