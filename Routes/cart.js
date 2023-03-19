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
    
    res.render("../View/Cart/CartM",{finalProducts,id,type,user,first,map})
})


router.route('/removeFromCart/:id').get(async (req,res)=>{
    const id=req.session.user;
    
    const productID=req.params.id;
    const customer = await customerService.getCustomerById(id);
    
    if(customer.shoppingCart!==null){
        
        let products= productController.removeFromCart(customer.shoppingCart,productID);
        customerService.updateCustomerShoppingCart(id,products);
        res.redirect('/cart');
    }
    else{
        res.redirect('/homepage');
    }
})

module.exports = router