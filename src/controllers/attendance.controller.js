const Attendance = require("../models/attendance");

// MARK attendance
const markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    const attendance = await Attendance.create({
      employeeId,
      date,
      status,
    });

    res.status(201).json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// SEARCH attendance
const searchAttendance = async (req, res) => {
  try {
    const { employeeId, date } = req.query;

    const attendance = await Attendance.findOne({ employeeId, date });

    if (!attendance) {
      return res.json({ status: "Absent" });
    }

    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  markAttendance,
  searchAttendance,
};
