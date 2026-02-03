const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employee.routes");
const attendanceRoutes = require("./routes/attendance.routes");

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://hrms-backend-five.vercel.app", // frontend (Vercel)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());




app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.send("HRMS Lite Backend Running");
});

module.exports = app;
