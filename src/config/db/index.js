const mongoose = require("mongoose");
// mongodb://127.0.0.1:27017/food-shop url to connect

// mongodb://localhost:27017 mongodb connection name
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect successfully");
  } catch (console) {
    console.log("Connect failure");
  }
}

module.exports = { connect };
