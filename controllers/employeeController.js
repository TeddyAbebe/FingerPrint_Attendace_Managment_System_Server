const Employee = require("../models/Employee");

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { name, employeeId, jobTitle, emailAddress, mobileNo, photo } =
      req.body;
    const newEmployee = new Employee({
      name,
      employeeId,
      jobTitle,
      emailAddress,
      mobileNo,
      photo,
    });

    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(500).json({ error: "Failed to create an employee" });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Failed to get employees" });
  }
};

// Other CRUD operations like getEmployeeById, updateEmployee, deleteEmployee, etc.
// You can add them as needed for your application.

module.exports = {
  createEmployee,
  getAllEmployees,
  // Export other functions here
};
