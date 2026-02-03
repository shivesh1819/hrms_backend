Project Overview:-----

HRMS Lite is a simple Human Resource Management System designed for small teams to manage employees and track attendance efficiently.
This application allows HR/admin users to:

Add, update, and delete employee information.

Mark employee attendance (Present/Absent) with date.

Search attendance records by employee ID and date.

View real-time employee and attendance data fetched from the database.

The application features a clean and simple UI using Tailwind CSS and a React frontend connected to a Node.js backend.
--------------------------------------
2-Tech Stack Used

Frontend: React.js, Tailwind CSS, Vite

Backend: Node.js, Express.js

Database: MongoDB (Atlas or local)

API Communication: Fetch API

Deployment: Render (backend), Vercel or any static hosting (frontend)
-------------------------------------------
3-Steps to Run the Project Locally
1. Clone the repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

2. Setup Backend
cd backend
npm install


Create a .env file in the backend folder:

MONGO_URI=<Your MongoDB connection string>
PORT=5000


Run the backend server:

npm run dev


Backend will run at http://localhost:5000
--------------------------------------------------------
3. Setup Frontend
cd ../frontend
npm install


Update API URL in api/employeeApi.js and api/attendanceApi.js:

const BASE_URL = "http://localhost:5000/api";


Run the frontend:

npm run dev


Frontend will run at http://localhost:5173 (or as shown in terminal)
---------------------------------------------------------------------------------
4. Usage

Add employees through the Employee Form.

Mark attendance for employees.

Search employee attendance by ID and date.

Update or delete employee information.
------------------------
5-Assumptions or Limitations

Employee IDs must be unique.

Attendance can only be marked once per employee per day.

No authentication or authorization is implemented (all users have full access).

Designed for small-scale teams; not optimized for enterprise-level usage.

Frontend and backend need to run locally or be correctly deployed to work.
