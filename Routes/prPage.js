const express = require("express")
const router = express.Router();
const productController = require('../Controller/Product');
const productService = require('../Services/product');
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');
const reviewService=require('../Services/review');
const reviewController=require('../Controller/review');



router.route('/:id').get(async (req,res)=>{
    
    
    


    const product= await productController.getProductById(req,res);
    const reviews= await reviewController.getReviewsByFilter({ProductId:req.params.id});

    
    
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

    
    

    res.render("../View/GenericProductPage/productPage",{type,product,user,first,isAdded,reviews})
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

router.route('/:id').post(async (req,res)=>{
    const product= await productController.getProductById(req,res);
    let star1= req.body.i1;
    let star2= req.body.i2;
    let star3= req.body.i3;
    let star4= req.body.i4;
    let star5= req.body.i5;
    let num=0;
    if(star1=="on"){
        if(star2=="on"){
            if(star3=="on"){
                if(star4=="on"){
                    if(star5=="on"){
                        num=5;
                    }
                    else{
                        num=4;
                    }
                }
                else{
                    num=3;
                }
            }
            else{
                num=2;
            }
        }
        else{
            num=1;
        }
    }
    let review=req.body.review;
    const userID = req.session.user;
    const user = await customerService.getCustomerById(userID);
    let Title=user.Name+" "+user.lastName;
    let videos=[];
    
    


    

    let revy = await reviewService.createReview(Title,userID,product._id,review,parseInt(num),videos);

    const reviews= await reviewController.getReviews(req,res);

    let sum=0;
    if(reviews.length!=0){
        for(rev of reviews){
            sum+=rev.Rating;
        }
        sum=Math.round(sum/reviews.length);
        productService.updateProductRating(product._id,sum);
    }




    res.redirect("/prPage/"+product._id);


})




module.exports = router