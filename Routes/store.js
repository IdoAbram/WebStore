const express = require("express");
const router = express.Router();
const productController = require('../Controller/Product');


router.get('/', async (req,res)=>{
    const products = await productController.getProductsByFilter({});
    res.render("../View/StorePage/StorePage",{products})
})





module.exports=router;