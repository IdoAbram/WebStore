const express = require("express");
const router = express.Router();
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');


router.get('/', async (req,res)=>{    
    const type =req.session.userType;
    const userID = req.session.user;
    let user=null;
    if(type=="customer"){
        user = await customerService.getCustomerById(userID);
    }
    else if(type=="admin"){
        user= await adminService.getAdminById(userID);
    }
    else if(type=="supplier"){
        user= await supplierService.getSupplierById(userID);
    }
    else{
        user=null;
    }
    

    res.render("../View/Info/info",{type,user});
})



module.exports=router;