const express = require("express");

const router = express.Router();

router.get("/", async (req,res) =>{
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});
router.route("/:userId").get (async (req,res) =>{
    const user = await User.findById(req.params.userId);
  return res.json(user);
})  
.patch(async (req,res) => {

 await User.findByIdAndUpdate(req.params.userId,{ lastName : "changed"});

  return res.json({status: "success"});
})
 .delete (async (req,res) => {
 await User.findByIdAndDelete(req.params.userId);
  return res.json({status: "Deleted"});
});
router.post("/", async (req,res) => {
  const body = req.body;
  const result = await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender : body.gender,
    jobTitle : body.jobTitle,
  })
  console.log("result : " , result);
  return res.json({msg : "success" });
});

router.get("/" , (req,res)=>{
  res.send("this is homepage");
})

module.exports = router;