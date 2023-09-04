# Timer App - Backend

This is the backend code for the Timer App, which serves as the server-side of the application. The backend is responsible for handling user authentication, managing timers, and serving data to the front-end.

## Technologies Used

- **Node.js:** The backend is built using Node.js, a JavaScript runtime.

- **Express:** Express is used as the web application framework to simplify the development of the server.

- **MongoDB:** MongoDB, a NoSQL database, is used for storing user data and timer information.

- **JSON Web Tokens (JWT):** JWT is used for user authentication and securing routes.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB installed locally or a remote MongoDB instance.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/josephsegbefia/timeup-server.git
   cd timerup-server
   ```

   npm install
   npm run dev

## API Endpoints

### User Authentication

- POST /auth/signup: Create a new user account.
- POST /auth/login: Log in an existing user and receive a JWT token for authentication.

### Timers

- GET /api/:userId/timers: Get a list of timers associated with a specific user.
- POST /api/timers: Create a new timer.
- POST /api/:userId/timers/:timerId/edit: Edit an existing timer.
- DELETE /api/timers/:timerId/delete: Delete a timer.
- POST /api/users/:userId/timers/:timerId/start: Start a timer.
- POST /api/users/:userId/timers/:timerId/stop: Stop a timer.

## Usage

Ensure the backend is running to support the frontend of the Timer App.
Handle user registration and authentication.
Manage timers by creating, editing, and deleting them.
Track the elapsed time for timers and handle timer start and stop actions.

## Acknowledgments

- Node.js
- Express
- MongoDB
- JSON Web Tokens (JWT)
