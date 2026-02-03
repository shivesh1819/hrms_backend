const Employee = require("../models/Employee");

exports.addEmployee = async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await Employee.findOne({ employeeId });
    if (exists) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    const employee = await Employee.create({
      employeeId,
      fullName,
      email,
      department
    });

    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findOneAndDelete({ employeeId: req.params.employeeId });
  res.json({ message: "Employee deleted" });
};
