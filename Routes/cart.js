const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const cartController = require('../Controller/customer')


router.get('/:id',async (req,res)=>{
    const customer = await (cartController.getCustomerById(req,res));
    const products=customer.shoppingCart
    const id=req.params.id

    const allProducts = await productController.getProductsByFilter({});

    let finalProducts=[]

    for(let i=0;i<allProducts.length;i++){
        if(products.includes(allProducts[i]._id)){
            if(!finalProducts.includes(allProducts[i]._id)){
                finalProducts.push(allProducts[i]);
            }
        }
    }
    
    res.render("../View/Cart/CartM",{finalProducts,id, req, customer})
})

module.exports = router