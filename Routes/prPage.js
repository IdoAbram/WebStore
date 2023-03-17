const express = require("express")
const router = express.Router();
const productController = require('../Controller/Product');
const cartController = require('../Controller/customer');
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');



router.route('/:id').get(async (req,res)=>{
    
    const product= await productController.getProductById(req,res);
    const type =req.session.userType;
    const userID = req.session.user;
    let isAdded=false;
    const first=false;

    let user=null;
    
    if(type=="customer"){
        user = await customerService.getCustomerById(userID);
    }
    else if(type=="admin"){
        user= await adminService.getAdminById(userID);
    }
    else if(type=="supplier"){
        user= await supplierService.getSupplierById(userID);
    }
    else{
        user=null;
    }
    if(user!=null&&type=="customer"){
        const cart = user.shoppingCart;
        if(cart.includes(product._id))
        {
            isAdded=true;
        }
    }
    

    if(!product){
        await res.json({message:"Not Found"})
        return;
    }
    

    res.render("../View/GenericProductPage/productPage",{type,product,user,first,isAdded})
})

router.route('/:id/addToCart').get(async (req,res)=>{
    const product= await productController.getProductById(req,res);
    const userID = req.session.user;
    const user = await customerService.getCustomerById(userID);
    let cart;
    const type =req.session.userType;
    req.session.added = true;
    const first=false;
    if(user.shoppingCart!=null){
        cart=user.shoppingCart;
    }
    else{
        cart=[];
    }
    
    
    cart.push(req.params.id);
    customerService.updateCustomerShoppingCart(userID,cart);
    let isAdded=true;
    res.redirect("/prPage/"+product._id);
    
})




module.exports = router