## About Me
Hi! I'm Saurabh Singh, a passionate learner diving into the world of web development. This repository is a personal project where I built the backend for a MERN (MongoDB, Express.js, React, Node.js) authentication system as part of my self-learning journey. I’m excited to share my progress and the challenges I’ve overcome along the way!

## Project Overview
This repository contains the server-side logic for a MERN authentication application. I developed this backend to understand user authentication, OTP verification, and secure API design. It’s a work in progress, built entirely for my own learning and experimentation. The frontend is not included here, as this focuses solely on the backend.

## Purpose
I created this backend to enhance my skills in Node.js, Express.js, and MongoDB, while exploring integrations like Twilio for phone verification and email services. It’s a hands-on project to solidify my understanding of authentication flows, error handling, and environment variable management.

## Features
- User registration with email and phone verification
- Secure login and logout with JWT (JSON Web Token) authentication
- Password reset via token-based email links
- OTP delivery via Twilio calls and email
- Basic error handling and middleware support
- Rate limiting on registration attempts (max 10)

## Tech Stack
- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Web framework for building the API.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB, used to define the User model.
- **MongoDB**: NoSQL database for storing user data (connected via MongoDB Atlas).
- **Twilio**: API for delivering OTPs via phone calls.
- **Nodemailer/SMTP**: Custom email service for sending verification and password reset emails.
- **jsonwebtoken**: For generating and verifying JWTs for authentication.
- **bcryptjs**: For hashing and comparing passwords securely.
- **dotenv**: For managing environment variables in a `config.env` file.
- **crypto**: For generating secure tokens (e.g., password reset tokens).

## Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/DevSars24/mern3.git
   cd mern3/server
Install dependencies:
bash

Collapse

Wrap

Run


npm install
Create a config.env file:
Copy the environment variables from the example below into a config.env file in the server directory. Do not commit this file to Git.
Example config.env:
text

Collapse

Wrap


PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<db>?retryWrites=true&w=majority
JWT_EXPIRE=7d
JWT_SECRET_KEY=<your-secret-key>
COOKIE_EXPIRE=7
SMTP_SERVICE=gmail
SMTP_MAIL=<your-email>
SMTP_PASSWORD=<your-app-password>
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
TWILIO_SID=<your-twilio-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_PHONE_NUMBER=<your-twilio-phone-number>
Run the server:
bash

Collapse

Wrap

Run


node server.js
Test the API:
Use a tool like Postman to send requests (e.g., POST http://localhost:4000/api/v1/user/register).
Problems I Faced
During development, I encountered several challenges:

Environment Variable Loading: Initially, Twilio credentials weren’t loading due to the timing of dotenv.config(). I resolved this by ensuring environment variables are loaded before importing controller files.
Twilio Integration: The username is required error occurred because the Twilio client wasn’t initialized with valid credentials. This was fixed by validating and re-initializing the client with explicit environment variables.
Database Connection: Setting up MongoDB Atlas required correct URI formatting and handling connection errors.
OTP Delivery: Configuring Twilio for phone calls and SMTP for emails involved troubleshooting authentication and network issues.
Common Challenges Others Might Face
Environment Setup: Missing or misconfigured config.env files can break the app. Always double-check variable names and values.
Twilio Authentication: Invalid SID, Auth Token, or unverified phone numbers can cause API failures. Verify credentials in the Twilio console.
MongoDB Connection: Incorrect MONGO_URI or network issues can prevent database connectivity. Ensure MongoDB Atlas is properly configured.
Email Service: Gmail SMTP requires an app password (not the regular password) due to security settings.
Dependency Conflicts: Ensure all package versions are compatible (e.g., twilio, mongoose) to avoid runtime errors.
Timing Issues: Importing modules before loading environment variables can lead to undefined errors, requiring careful import order management.
Notes
This is the backend only. The frontend React app is hosted separately and not included here.
The config.env file contains sensitive data (e.g., API keys, passwords). It’s added to .gitignore to prevent accidental commits.
This project is for learning purposes and may need further optimization for production use (e.g., rate limiting, input validation).
License
This project is open-source under the MIT License. Feel free to use, modify, and learn from it!

Acknowledgments
Thanks to the xAI community and resources like Twilio documentation for helping me troubleshoot and learn.
Special shoutout to my self-learning journey for pushing me to build this!
Happy coding! 😄

text

Collapse

Wrap

### How to Use This README
1. **Create the File**:
   - Copy the above content into a `README.md` file in your `C:\Users\saura\mern3\server` directory.
   - Alternatively, use the command line to create it:
     ```bash
     cd C:\Users\saura\mern3\server
     echo "# mern3" > README.md
     # Then append the rest using a text editor or multiple echo commands
Add to Git:
After creating README.md, commit and push it:
bash

Collapse

Wrap

Run


git add README.md
git commit -m "added detailed README with intro and challenges"
git push -u origin main
Update .gitignore:
Ensure config.env is ignored:
bash

Collapse

Wrap

Run


echo "config.env" >> .gitignore
git add .gitignore
git commit -m "updated .gitignore"
git push
Customization
