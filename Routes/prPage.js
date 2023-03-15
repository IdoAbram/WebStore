const express = require("express")
const router = express.Router();
const productController = require('../Controller/Product')
const customerController= require('../Controller/customer')
const productService = require('../Services/product')
const customerService = require('../Services/Customer')




router.route('/:idPr/:idCu').get(async (req,res)=>{
    productID = req.params.idPr;
    customerID=req.params.idCu;
    const product= await productService.getProductById(productID);
    var customer1=0;

    if(customerID!='guest'){

        customer1 = await customerService.getCustomerById(productID);
    }
    const customer=customer1;
    

    if(!product){
        await res.json({message:"Not Found"})
        return;
    }
    res.render("../View/GenericProductPage/productPage",{customer,product})



})

// router.route('/:idPr/guest').get(async (req,res)=>{
    
//     const product= await productController.getProductById(req,res);
//     const custoemr=0;

//     if(!product){
//         await res.json({message:"Not Found"})
//         return;
//     }
//     productID = req.params.id;

//     res.render("../View/GenericProductPage/productPage",{customer,product})
// })

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