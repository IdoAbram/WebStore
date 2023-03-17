const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const customerService = require('../Services/customer');
const { route } = require("./buyPage");

router.get('/',async (req,res)=>{
    const id=req.session.user;
    const customer = await customerService.getCustomerById(id);
    let products;
    if(customer.shoppingCart!=null){
        products=customer.shoppingCart;
    }
    const type =req.session.userType;
    const user = await customerService.getCustomerById(id);
    let first = false;
    const allProducts = await productController.getProductsByFilter({});

    let finalProducts=productController.getProductsByIds(allProducts,products);

    const total=req.session.total

    res.render("../View/Cart/CartM",{finalProducts,id,type,user,first,req, total})
})

router.get('/increaseTotalPrice/:id',async(req,res)=>{
    const product=await productController.getProductById(req,res);
    const total=req.session.total+product.price
    req.session.total=total
    res.redirect('/cart')
})
router.get('/decreaseTotalPrice/:id',async(req,res)=>{
    const product=await productController.getProductById(req,res);
    const total=req.session.total-product.price
    req.session.total=total
    res.redirect('/cart')
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
        res.redirect('homePage');
    }
    
    
    
    
    
})

module.exports = router