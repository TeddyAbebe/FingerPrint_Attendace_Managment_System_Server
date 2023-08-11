const express = require("express");
const { registerAdmin } = require("../controllers/adminControllers");

const router = express.Router();

router.route("/").post(registerAdmin);

module.exports = router;
