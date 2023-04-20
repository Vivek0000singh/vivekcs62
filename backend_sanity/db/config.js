const mongoose = require("mongoose");
require("dotenv").config();

// Get the MongoDB URI from the environment variable
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB using Mongoose
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
