const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();
const productController = require('../Controller/product')
const cartController = require('../Controller/customer')


router.get('/:id',async (req,res)=>{
    const customer = await (cartController.getCustomerById(req,res));
    const products=customer.shoppingCart
    const id=req.params.id

    const allProducts = await productController.getProductsByFilter({});

    let finalProducts=[]

    for(let i=0;i<allProducts.length;i++){
        for(let j=0;j<products.length;j++){
            if(products[j]==allProducts[i]._id){
                finalProducts.push(allProducts[i]);
            }
        }
    }
    const total=req.session.total
    res.render("../View/BuyPage/buyPageM",{finalProducts,customer,id ,total})
})
module.exports = router