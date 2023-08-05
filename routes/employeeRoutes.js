const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  fireEmployee,
} = require("../controllers/employeeController");

// Route for Getting all employees
router.route("/").get(getAllEmployees);

// Route for Creating a new employee
router.route("/create").post(createEmployee);

// ROute for Getting, Updating and Deleting an employee
router.route("/:id").get(getEmployeeById).put(updateEmployee).delete(fireEmployee);

module.exports = router;
