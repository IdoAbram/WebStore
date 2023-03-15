const express = require("express")
const router = express.Router();
const productController = require('../Controller/product') //Controller API for using the mongoose methods

router.get('/get',async (req,res)=>{
    const products = await productController.getProductsByFilter({});
    res.render("../View/Product/getProducts",{products})
})

router.get('/create',async (req,res)=>{
    res.render("../View/Product/makeProduct")
})

router.route('/create').post(productController.createProduct)


router.route('/delete').get(function (req,res){
    productController.deleteAllProducts()
    res.redirect("/products/get")
});
 

router.route('/update/:id').get(async (req,res)=>{
    const product = await productController.getProductById(req,res);
    if(!product){
        await res.json({message:"Not Found"})
        return;
    }

    productID = req.params.id
    res.render("../View/product/updateProduct",{productID,product})

})

router.route('/update/:id').post(async (req,res)=>{

    productController.updateAll(req,res);
})

module.exports = router
