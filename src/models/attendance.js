const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: String,   // <-- Changed from ObjectId to String
    required: true,
  },
  date: {
    type: String,   // you can also use Date type if you want
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true,
  },
});

// Optional: prevent marking attendance twice for same employee + date
attendanceSchema.index({ employeeId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
