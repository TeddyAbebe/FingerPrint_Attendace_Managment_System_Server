const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

// Route for creating a new employee
router.post("/", employeeController.createEmployee);

// Route for getting all employees
router.get("/", employeeController.getAllEmployees);

// Other routes like getById, update, delete, etc.
// You can add them as needed for your application.

module.exports = router;
