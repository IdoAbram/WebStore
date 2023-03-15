const express = require("express")
const router = express.Router();
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');


router.get('/',async (req,res)=>{
    res.render("../View/HomePage/HomePage")
})

router.get('/customer/',async (req,res)=>{
    const id = req.session.user;
    const user = await customerService.getCustomerById(id);
    if(!user){
        await res.json({message:"Not Found"})
        return;
    }
    res.render("../View/HomePage/HomePageCustomer",{id,user})
})

router.get('/admin/',async (req,res)=>{
    const id = req.session.user;
    const user = await adminService.getAdminById(id);
    if(!user){
        await res.json({message:"Not Found"})
        return;
    }
    res.render("../View/HomePage/HomePageAdmin",{id,user})
})

router.get('/supplier/',async (req,res)=>{
    const id = req.session.user;
    const user = await supplierService.getSupplierById(id);
    if(!user){
        await res.json({message:"Not Found"})
        return;
    }
    res.render("../View/HomePage/HomePageSupplier",{id,user})
})

router.post('/',async (req,res)=>{
    const products = await productController.getProductsByFilter({});
    res.render("../View/StorePage/StorePage",{products})
})

module.exports = router;