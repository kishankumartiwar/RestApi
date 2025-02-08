const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const userRouter = require('./routes/user.route.js');
const app = express();


PORT = 8000;

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



app.use(express.urlencoded({extended : false}));
app.use((req,res,next) =>{
/*   return res.json("middleware response");
 */
next();

}); 

app.use("/user", userRouter);

app.listen(PORT , ()=>{
  console.log("server running on port 8000");
})