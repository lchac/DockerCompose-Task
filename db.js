const mongoose = require("mongoose");

async function connect() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test"; //
  try {
    await mongoose.connect(uri);
  } catch (err) {
    console.log({ err });
    return "Failed to connect to MongoDB!";
  }
  return "Connected to MongoDB!";
}

module.exports = { connect };
