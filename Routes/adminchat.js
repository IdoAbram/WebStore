const express = require("express");
const router = express.Router();
const adminService = require("../Services/admin")


router.get('/', async (req,res)=>{



    const type = req.session.userType;
    const userID = req.session.user;
    const first = req.session.first;

    let user = null

   if(type === "admin"){
    user = await adminService.getAdminById(userID);
   

    res.render("../View/AdminChat/chat",{user,type,first})
   }
   else{
    res.render("../View/sorry/sorry")
   }


})

module.exports=router;
