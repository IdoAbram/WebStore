const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const customerService = require('../Services/customer')


router.get('/',async (req,res)=>{
   /* const Product = await productController.getProducts(req,res);
    if(!Product){
        await res.json({message:"Not Found"})
        return;
    }

    const customer = await (cartController.getCustomerById(req,res));
    const products=customer.shoppingCart

    await res.render("../View/Cart/CartM",{products,Product})*/
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

    let finalProducts=[]

    if(products!=null){
        for(let i=0;i<allProducts.length;i++){
            if(products.includes(allProducts[i]._id)){
                if(!finalProducts.includes(allProducts[i])){
                    finalProducts.push(allProducts[i]);
                }
            }
        }
    }
    
    res.render("../View/Cart/CartM",{finalProducts,id,type,user,first})
})


router.route('/removeFromCart/:id').get(async (req,res)=>{
    const id=req.session.user;
    const productID=req.params.id;
    const customer = await customerService.getCustomerById(id);
    
    if(customer.shoppingCart!==null){
        let products=customer.shoppingCart;
        let finalProductsIDS=[]
        for(let i=0;i<products.length;i++){
            if(products[i]!=productID){
                finalProductsIDS.push(products[i]);
            }
        }
        customerService.updateCustomerShoppingCart(id,finalProductsIDS);
        res.redirect('/cart');
    }
    else{
        res.redirect('homePage');
    }
    
    
    
    
    
})

module.exports = router