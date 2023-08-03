const mongoose = require("mongoose");

const connectDB = async () => {
  try {     
    await mongoose.connect(
      "mongodb+srv://teddyab729:attendance@employee-attendance.tqmmjsw.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
