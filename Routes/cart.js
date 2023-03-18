const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const customerService = require('../Services/customer')


<<<<<<< HEAD
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
=======
router.get('/:id',async (req,res)=>{

    const customer = await (cartController.getCustomerById(req,res));
    const products=customer.shoppingCart
    const id=req.params.id

>>>>>>> c85ba1881af0ddbc4e4e5ebd81b46d6363da6def
    const allProducts = await productController.getProductsByFilter({});

    let finalProducts=productController.getProductsByIds(allProducts,products);
    
    res.render("../View/Cart/CartM",{finalProducts,id,type,user,first})
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