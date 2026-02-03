const express = require("express");
const router = express.Router();

const {
  markAttendance,
  searchAttendance
} = require("../controllers/attendance.controller");

router.post("/mark", markAttendance);
router.get("/search", searchAttendance);

module.exports = router;
