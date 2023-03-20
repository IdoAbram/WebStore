const express = require("express")
const router = express.Router();
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');
const reviewService=require('../Services/review');


router.get('/',async (req,res)=>{
    
    const type = req.session.userType;
    const id = req.session.user;
    let first=null;
    if(req.session.isFirst==null){
        first=true;
    }
    else{
        first=req.session.isFirst
    }
    
    let user=null;
    if(type=="customer"){
        user = await customerService.getCustomerById(id);
    }
    else if(type=="admin"){
        user= await adminService.getAdminById(id);
    }
    else if(type=="supplier"){
        user= await supplierService.getSupplierById(id);
    }
    else{
        user=null;
    }
    
    
    res.render("../View/HomePage/HomePage",{user,type,first})
})


// router.get('/admin/',async (req,res)=>{
//     const id = req.session.user;
//     const user = await adminService.getAdminById(id);
//     if(!user){
//         await res.json({message:"Not Found"})
//         return;
//     }
//     res.render("../View/HomePage/HomePageAdmin",{id,user})
// })

// router.get('/supplier/',async (req,res)=>{
//     const id = req.session.user;
//     const user = await supplierService.getSupplierById(id);
//     if(!user){
//         await res.json({message:"Not Found"})
//         return;
//     }
//     res.render("../View/HomePage/HomePageSupplier",{id,user})
// })



module.exports = router;