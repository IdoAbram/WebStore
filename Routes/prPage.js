const express = require("express")
const router = express.Router();
const productController = require('../Controller/Product')
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');



router.route('/:id').get(async (req,res)=>{
    
    const product= await productController.getProductById(req,res);
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

    if(!product){
        await res.json({message:"Not Found"})
        return;
    }
    

    res.render("../View/GenericProductPage/productPage",{type,product,user})
})


module.exports = router