const express = require("express")
const router = express.Router();
const adminController = require('../Controller/admin') //Controller API for using the mongoose methods
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');

router.get('/get',async (req,res)=>{
    const type =req.session.userType;
    const userID = req.session.user;
    const first=false;
    let user=null;
    if(type=="customer"){
        user = await customerService.getCustomerById(userID);
        res.render("../View/sorry/sorry")
        return;
    }
    else if(type=="admin"){
        user= await adminService.getAdminById(userID);
    }
    else if(type=="supplier"){
        user= await supplierService.getSupplierById(userID);
        res.render("../View/sorry/sorry")
        return;
    }
    else{
        user=null;
        res.render("../View/sorry/sorry")
        return;
    }
    const Admins = await adminController.getAdminsByFilter({Privileges: "1"});
    res.render("../View/Admin/getAdmin",{Admins,user,type,first})
})

router.get('/delete/:id',async (req,res)=>{
    await adminController.deleteAdmin(req,res);
    res.redirect('/admin/get');
})

module.exports=router;