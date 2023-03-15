const express = require("express")
const router = express.Router();
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');


router.get('/',async (req,res)=>{
    const type = req.session.userType;
    const id = req.session.user;
    const user = await customerService.getCustomerById(id);
    
    res.render("../View/HomePage/HomePage",{id,user,type})
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