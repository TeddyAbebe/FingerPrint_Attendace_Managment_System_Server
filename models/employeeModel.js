const mongoose = require("mongoose");

// Define the Employee schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  photo: {
    type: String, // You can store the URL or file path of the photo
    default: "", // You can set a default image path if needed
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
