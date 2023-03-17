const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();
const productController = require('../Controller/product')
const cartController = require('../Controller/customer')
const customerService = require('../Services/customer')


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

    res.render("../View/BuyPage/buyPageM",{finalProducts,customer,id ,total,user,type})
})
module.exports = router