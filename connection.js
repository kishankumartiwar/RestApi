const mongoose = require("mongoose");

// MongoDB URI
const uri = "mongodb+srv://KishanKumar:Hellgate297@cluster0.cksrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });
