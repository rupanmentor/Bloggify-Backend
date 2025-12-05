# Bloggify Backend

This is the backend for the Bloggify application. It is built using Node.js, Express.js and MongoDB.

## Features

* User authentication and authorization
* Blog post creation, deletion and approval
* Email sending for password reset

## Installation

* Clone the repository
* Install dependencies using `npm install`
* Set up environment variables using a `.env` file
* Start the server using `npm start`

## API Endpoints

### Authentication

* `POST /api/auth/register`: Register a new user
* `POST /api/auth/login`: Login an existing user
* `POST /api/auth/forgot-password`: Send password reset email
* `POST /api/auth/reset-password/:id/:token`: Reset password

### Blog Posts

* `POST /api/post/create`: Create a new blog post
* `GET /api/post/getpost`: Get all approved blog posts
* `GET /api/post/unapprovedpost`: Get all unapproved blog posts
* `PATCH /api/post/approve/:id`: Approve a blog post
* `DELETE /api/post/delete/:id`: Delete a blog post

## Environment Variables

* `MONGODB_URL`: MongoDB connection string
* `JWT_SECRET`: Secret key for JWT
* `CLOUD_NAME`: Cloudinary cloud name
* `CLOUD_API_KEY`: Cloudinary API key
* `CLOUD_API_SECRET`: Cloudinary API secret
* `PASS_MAIL`: Email address for sending password reset emails
* `PASS_KEY`: Password for sending password reset emails
