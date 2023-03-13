const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const cartController = require('../Controller/customer')


router.get('/:id',async (req,res)=>{
   /* const Product = await productController.getProducts(req,res);
    if(!Product){
        await res.json({message:"Not Found"})
        return;
    }

    const customer = await (cartController.getCustomerById(req,res));
    const products=customer.shoppingCart

    await res.render("../View/Cart/CartM",{products,Product})*/

    const customer = await (cartController.getCustomerById(req,res));
    const products=customer.shoppingCart

    const allProducts = await productController.getProductsByFilter({});

    let finalProducts=[]

    for(let i=0;i<allProducts.length;i++){
        for(let j=0;j<products.length;j++){
            if(products[j]==allProducts[i]._id){
                finalProducts.push(allProducts[i]);
            }
        }
    }
    res.render("../View/Cart/CartM",{finalProducts})
})


module.exports = router