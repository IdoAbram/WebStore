const express = require("express")
const router = express.Router();
const productController = require('../Controller/Product')
const customerController= require('../Controller/customer')
const productService = require('../Services/product')
const customerService = require('../Services/Customer')



router.route('/:id').get(async (req,res)=>{
    
    const product= await productController.getProductById(req,res);
    

    if(!product){
        await res.json({message:"Not Found"})
        return;
    }
    productID = req.params.id;

    res.render("../View/GenericProductPage/productPage",{productID,product})
})


module.exports = router