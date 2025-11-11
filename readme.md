# MERN Blog

## Overview
Simple blog built with MongoDB, Express, React, Node (MERN). Features: CRUD posts, categories, comments, auth, image uploads, pagination, search.

## Setup
Prereqs: Node.js v18+, MongoDB

### Server
cd server
cp .env.example .env
# edit .env with your MONGO_URI and JWT_SECRET
npm install
npm run dev

### Client
cd client
cp .env.example .env
# optionally change VITE_API_URL
npm install
npm run dev

Open http://localhost:5173

## API
- GET /api/posts
- GET /api/posts/:id
- POST /api/posts (auth, multipart/form-data)
- PUT /api/posts/:id (auth)
- DELETE /api/posts/:id (auth)
- GET /api/categories
- POST /api/categories (auth)
- POST /api/auth/register
- POST /api/auth/login
- POST /api/comments/:postId

## Features implemented
- List, create, edit, delete posts
- Categories
- Comments
- Image uploads
- Auth (JWT)
- Pagination, search, optimistic UI

## Screenshots
(add screenshots here)

## Notes
- For production, replace file uploads with cloud storage.
- Secure JWT secret, enable HTTPS, add rate limiting and input sanitization.
