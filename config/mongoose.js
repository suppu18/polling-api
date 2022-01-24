const mongoose = require("mongoose");
//connecting mongoose with database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/polling-api");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});
// exporting database
module.exports = db;
