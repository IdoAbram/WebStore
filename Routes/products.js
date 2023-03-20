const express = require("express")
const router = express.Router();
const productController = require('../Controller/product') //Controller API for using the mongoose methods
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');
const supplierService = require('../Services/supplier');

router.get('/get',async (req,res)=>{
    const products = await productController.getProductsByFilter({});
    res.render("../View/Product/getProducts",{products})
})

router.get('/getforsup',async (req,res)=>{
    const type =req.session.userType;
    const userID = req.session.user;
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
    const products = await productController.getProductsByFilter({Supplier_Id: userID});
    res.render("../View/product/getforsup",{products,type,user,first})
})

router.get('/create',async (req,res)=>{
    const type =req.session.userType;
    const userID = req.session.user;
    const first=false;
    let user=null;
    if(type=="customer"){
        user = await customerService.getCustomerById(userID);
        res.render("../View/sorry/sorry")
        return;
    }
    else if(type=="admin"){
        user= await adminService.getAdminById(userID);
        res.render("../View/sorry/sorry")
        return;
    }
    else if(type=="supplier"){
        user= await supplierService.getSupplierById(userID);
    }
    else{
        user=null;
        res.render("../View/sorry/sorry")
        return;
    }
    res.render("../View/Product/makeProduct",{user,first,type});
})

router.route('/create').post(function(req,res){
    productController.createProduct(req,res);
    res.redirect('/products/create');
})


router.route('/delete').get(function (req,res){
    productController.deleteAllProducts()
    res.redirect("/products/get")
});
 
router.route('/deleteforsup/:id').get(function (req,res){
    productController.deleteProduct(req,res);
    res.redirect("/products/getforsup");
});

router.route('/update/:id').get(async (req,res)=>{
    const product = await productController.getProductById(req,res);
    if(!product){
        await res.json({message:"Not Found"})
        return;
    }

    productID = req.params.id
    res.render("../View/product/updateProduct",{productID,product})

})

router.route('/update/:id').post(async (req,res)=>{

    productController.updateAll(req,res);
})

module.exports = router
