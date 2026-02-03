const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employee.routes");
const attendanceRoutes = require("./routes/attendance.routes");

const app = express();

// ✅ FIXED CORS
app.use(cors());

app.use(express.json());

app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.send("HRMS Lite Backend Running");
});

module.exports = app;

