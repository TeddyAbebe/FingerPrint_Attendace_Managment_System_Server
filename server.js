const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./DB/db");
const employees = require("./data/data");

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Attendance System APIss");
});

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp._id.toString() === req.params.id);

  res.send(employee);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
