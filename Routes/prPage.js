const express = require("express")
const router = express.Router();
const productController = require('../Controller/Product')




router.route('/prPage/:id').get(async (req,res)=>{
    const product = await productController.getProductById(req,res);
    if(!product){
        await res.json({message:"Not Found"})
        return;
    }

    prID = req.params.id
    res.render("../View/GenericProductPage/ProductPage",{prID,product})

})

module.exports = router