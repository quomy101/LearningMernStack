const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);

    console.log("MongoDB connected");
  } catch (err) {
    console.warn(err.message);
    process.exit();
  }
};

module.exports = connectDB;
