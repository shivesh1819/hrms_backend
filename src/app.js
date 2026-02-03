const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./routes/employee.routes");
const attendanceRoutes = require("./routes/attendance.routes");

const app = express();

app.use(cors({origin:"https://hrms-backend-zdr7.onrender.com",credentials:true}));
app.use(express.json());




app.use("/api/employees", employeeRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.send("HRMS Lite Backend Running");
});

module.exports = app;
