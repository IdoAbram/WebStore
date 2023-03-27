const express = require("express");
const router = express.Router();
const productController = require('../Controller/Product');
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');
const reviewService = require('../Services/review');



router.get('/', async (req,res)=>{
    
    const products = await productController.getProductsByFilter({});
    const type =req.session.userType;
    const userID = req.session.user;
    const first=false;
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
    

    res.render("../View/StorePage/StorePage",{products,type,user,first})
})

router.post('/', async (req,res)=>{
    let products = await productController.getProductsByFilter({});
    if(req.body.search != ""){
        products = products.filter(p => String(p.Title).includes(String(req.body.search)));
    }
    if(req.body.sports == 'on'){products = products.filter(p => p.Tags.includes("sports"));}
    if(req.body.kids == 'on'){products = products.filter(p => p.Tags.includes("kids"));}
    if(req.body.technology == 'on'){products = products.filter(p => p.Tags.includes("technology"));}
    if(req.body.clothes == 'on'){products = products.filter(p => p.Tags.includes("clothes"));}
    if(req.body.home == 'on'){products = products.filter(p => p.Tags.includes("home"));}
    const type =req.session.userType;
    const userID = req.session.user;
    const first=false;
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
    

    res.render("../View/StorePage/StorePage",{products,type,user,first})
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