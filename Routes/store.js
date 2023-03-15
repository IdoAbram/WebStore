const express = require("express");
const router = express.Router();
const productController = require('../Controller/Product');
const customerController = require('../Controller/Customer');

router.get('/', async (req,res)=>{
    const products = await productController.getProductsByFilter({});
    
    res.render("../View/StorePage/StorePage",{products})
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