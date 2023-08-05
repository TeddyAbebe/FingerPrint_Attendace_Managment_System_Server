const Employee = require("../models/employeeModel");
const asyncHandler = require("express-async-handler");

// Get all employees
const getAllEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Create a new employee
const createEmployee = asyncHandler(async (req, res) => {
  const { name, employeeId, jobTitle, emailAddress, mobileNo, photo } =
    req.body;

  if (
    !name ||
    !employeeId ||
    !jobTitle ||
    !emailAddress ||
    !mobileNo ||
    !photo
  ) {
    res.status(400);
    throw new Error("Please Fill all the Fields!");
  } else {
    const employee = new Employee({
      name,
      employeeId,
      jobTitle,
      emailAddress,
      mobileNo,
      photo,
    });

    const newEmployee = await employee.save();

    res.status(201).json(newEmployee);
  }
});

// Other CRUD operations like getEmployeeById, updateEmployee, deleteEmployee.
const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: "Employee not Found" });
  }
});

const updateEmployee = asyncHandler(async (req, res) => {
  const { name, employeeId, jobTitle, emailAddress, mobileNo, photo } =
    req.body;

  const employee = await Employee.findById(req.params.id);

  if (employee) {
    employee.name = name;
    employee.employeeId = employeeId;
    employee.jobTitle = jobTitle;
    employee.emailAddress = emailAddress;
    employee.mobileNo = mobileNo;
    employee.photo = photo;

    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } else {
    res.status(404);
    throw new Error("Employee Not Found");
  }
});

const fireEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    await employee.remove();
    res.json({ message: "Employee Fired!" });
  } else {
    res.status(404);
    throw new Error("Employee Not Found");
  }
});

module.exports = {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  fireEmployee,
};
