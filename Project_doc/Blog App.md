# 📝 Blog App – Clean Architecture & BLoC Pattern in Flutter

This blog application is built with a focus on **Clean Architecture** and **BLoC (Business Logic Component) pattern**, serving as both a functional app and a study project. It allows authenticated users to create, view, like, and save blog posts. Data is stored in **Firebase Firestore**, with **Firebase Authentication** for secure access and **Hive** used for implementing one-time login on the local device.

---

## 🛠 Technologies Used

- **Flutter** – Cross-platform UI toolkit  
- **Firebase Firestore** – Cloud NoSQL database  
- **Firebase Authentication** – Secure user login  
- **Hive** – Local database for persistent one-time login  
- **BLoC Pattern** – State management  
- **Clean Architecture** – Scalable and maintainable code structure  

---

## 📱 Project Overview

This project serves as a practical implementation of scalable architecture in Flutter apps. It allows users to:

- Register and log in with Firebase Authentication  
- Create blog posts by uploading an image, writing a title and content  
- View blog feed from other users  
- Like posts to show appreciation  
- Save posts to read later  
- Experience one-time login via Hive for improved UX

---

## 🚀 Key Features

- 🖊 **Create and Publish Blogs**  
  Add an image, title, and content to publish a new blog post.

- ☁️ **Firebase Firestore Integration**  
  All blog data is stored securely in the cloud and retrieved in real-time.

- 🔐 **User Authentication**  
  Login and signup system with email/password using Firebase Auth.

- 💾 **One-Time Login with Hive**  
  Once logged in, the user session is persisted locally using Hive.

- ❤️ **Like Posts**  
  Engage with other posts through a like button.

- 📥 **Save for Later**  
  Bookmark posts to view them later.

---

## 🧩 Challenges & Solutions

| Challenge | Solution |
|----------|----------|
| Implementing Clean Architecture structure | Used layers: data → domain → presentation with proper separation of concerns |
| Real-time updates in BLoC | Integrated Firestore listeners inside BLoC with stream subscriptions |
| Image upload and preview | Handled file selection and preview with caching for better UX |
| Managing local login with Hive | Stored user token/email locally to skip login screen on app restart |

---
