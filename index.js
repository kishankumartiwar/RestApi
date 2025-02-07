const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

PORT = 8000;
app.get("/api/users", (req,res) =>{
  return res.send(users);
});
app.route("/api/users/:userId").get ((req,res) =>{
  const id = Number(req.params.userId);
  const user = users.find((user) => user.id === id);
  return res.json(user);
}).patch((req,res) => {
  return res.json({status: pending});
}).delete ((req,res) => {
  return res.json({status: pending});
});
app.post("/api/users", (req,res) => {
  console.log("status pending");
  return res.json({status:pending});
});

app.get("/users" , (req,res)=>{
  res.send("this is homepage");
})
app.listen(PORT , ()=>{
  console.log("server running on port 8000");
})