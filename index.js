const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();

PORT = 8000;

app.use(express.urlencoded({extended : false}));
app.use((req,res,next) =>{
/*   return res.json("middleware response");
 */
next();

}); 

app.get("/api/users", (req,res) =>{
  return res.send(users);
});
app.route("/api/users/:userId").get ((req,res) =>{
  const id = Number(req.params.userId);
  const user = users.find((user) => user.id === id);
  return res.json(user);
})  
.patch((req,res) => {
  const id = Number(req.params.userId);
  const user = users.find((user) => user.id === id);
  const {first_name,last_name} = req.body; 
  user.first_name = first_name; 
  user.last_name = last_name;
  console.log(user);
 /*  fs.writeFileSync({}); */

  return res.json({status: "pending"});
})
 .delete ((req,res) => {
  return res.json({status: "pending"});
});
app.post("/api/users", (req,res) => {
  const body = req.body;
  users.push({...body , id: users.length+1});
  fs.writeFileSync('./MOCK_DATA.json',JSON.stringify(users));
  console.log(body);
  return res.json({status:"success" , id: users.length });
});

app.get("/users" , (req,res)=>{
  res.send("this is homepage");
})
app.listen(PORT , ()=>{
  console.log("server running on port 8000");
})