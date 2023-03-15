const express = require("express");
const router = express.Router();
const productController = require('../Controller/Product');
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');

router.get('/', async (req,res)=>{
    const products = await productController.getProductsByFilter({});
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
    

    res.render("../View/StorePage/StorePage",{products,type,user})
})

// router.route('/:id').get(async (req,res)=>{
//     const customer = await customerController.getCustomerById(req,res);
//     const products = await productController.getProductsByFilter({});
//     if(!products){
//         await res.json({message:"Not Found"})
//         return;
//     }

//     res.render("../View/StorePage/StorePage",{customer,products})

// })



module.exports=router;