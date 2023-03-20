const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const customerService = require('../Services/customer')
const productService = require('../Services/product');

router.get('/',async (req,res)=>{
    const id=req.session.user;
    const customer = await customerService.getCustomerById(id);
    let products;
    let map=customer.shoppingCart;
    if(customer.shoppingCart!=null){
        products=Array.from(customer.shoppingCart.keys());
    }
    const type =req.session.userType;
    const user = await customerService.getCustomerById(id);
    let first = false;
    let finalProducts=[];
    for(let i=0;i<products.length;i++){
        let pr= await productService.getProductById(products[i]);
        finalProducts.push(pr);
    }

    res.render("../View/BuyPage/buyPageM",{finalProducts,customer,id ,total,user,type})
})
module.exports = router