const express = require("express");
const router = express.Router();
const productController = require('../Controller/Product');


router.get('/', async (req,res)=>{
    const products = await productController.getProductsByFilter({});
    res.render("../View/StorePage/StorePage",{products})
})

router.route('/prPage/:id').get(async (req,res)=>{
    const product = await productController.getProductById(req,res);
    if(!product){
        await res.json({message:"Not Found"})
        return;
    }

    productID = req.params.id
    res.render("../View/GenericProductPage/productPage",{productID,product})

})



module.exports=router;