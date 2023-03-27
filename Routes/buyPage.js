const express = require("express")
const router = express.Router();
const productController = require('../Controller/product')
const customerService = require('../Services/customer')
const productService = require('../Services/product');
const ordersService = require('../Services/orders');
const giftCardService = require('../Services/giftcard');

let discount = 0;

let giftCards = new Map();


router.get('/',async (req,res)=>{


    let total = 0;
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
        if(pr!=null){
            finalProducts.push(pr);
            if(map.get(pr._id)>pr.AmountAvailable){
                total+=pr.price*pr.AmountAvailable;
            }
            else{
                total+= pr.price*map.get(pr._id);
            }
            
        }
        else{
            map.delete(products[i])
            customerService.updateCustomerShoppingCart(id,map)
        }
    }
    req.session.total = total;
    total-=discount;
    discount =0;
    res.render("../View/BuyPage/buyPageM",{finalProducts,customer,id,user,type,first,map,total})
})

router.post('/',async(req,res)=>{
    
    let giftCardId= req.body.giftCard;
    let giftCard = await giftCardService.getGiftCardById(giftCardId);
    let total = req.session.total;
    if(giftCard!=null&&giftCard.isBought==true){
        if(total<giftCard.price){
            discount = total;
            giftCards.set(giftCardId,giftCard.price-total)
        }
        else{
            discount =giftCard.price;
            giftCards.set(giftCardId,0); 
        }
    }
    
    res.redirect('/buyPage');

})

router.get('/complete',async(req,res)=>{
    const userId=req.session.user;
    const customer = await customerService.getCustomerById(userId);
    const type =req.session.userType;
    let first = false;

    let map = customer.shoppingCart;
    let array=Array.from(map);
    let products;
    if(customer.shoppingCart!=null){
        products=Array.from(customer.shoppingCart.keys());
    }

    let finalMap = new Map();
    let sum=0;
    for(let i=0;i<products.length;i++){
        let pro1= await productService.getProductById(array[i][0].split(" ")[0]);
        if(array[i][1]>pro1.AmountAvailable){
            await productService.updateProductAmAvailable(pro1._id,0);
            sum+= pro1.price*pro1.AmountAvailable;
            finalMap.set(array[i][0].split(" ")[0],pro1.AmountAvailable);
        }
        else{
            await productService.updateProductAmAvailable(pro1._id,pro1.AmountAvailable-array[i][1]);
            sum+= pro1.price*array[i][1];
            finalMap.set(array[i][0].split(" ")[0],array[i][1]);
        }
        
        
    }
    var today = new Date();
    const threeWeeksLater = new Date(today.setDate(today.getDate() + 21));
    let map1 = new Map();

    let update = Array.from(giftCards);
    for(let i=0;i<update.length;i++){
        await giftCardService.updateGiftCardPrice(update[i][0],update[i][1]);
    }

    if(finalMap.size>0){
        ordersService.createOrders(Number(sum),Number(finalMap.size*10),"Wizz",today,threeWeeksLater,finalMap,userId);
        customerService.updateCustomerShoppingCart(userId,map1);
        res.redirect('/orders/my');
    }
    else{
        res.redirect('/homePage');
    }

    
})

router.get('/moneySpent/:total',async(req,res)=>{
    let err=""
    const id=req.session.user;
    const customer = await customerService.getCustomerById(id);
    let total=customer.moneySpent
    
    //for amount available
    let map=customer.shoppingCart
    let product
    let array=Array.from(map);

    // use forEach() to iterate over the array
    for(let i=0;i<array.length;i++) {
        product= await productService.getProductById(array[i][0])
        //checking
        if(product.AmountAvailable<array[i][1]){
            err+="There is only:"+product.AmountAvailable+" of product:"+product.Title+"\n"
        }
        else{
            //changing
            productService.updateProductAmAvailable(product._id,product.AmountAvailable-array[i][1])
            product.AmountAvailable-=array[i][1]
            
        }
    }
    if(err==""){
        //for money spent
        total=parseInt(total)+parseInt(req.params.total)
        customerService.updateCustomerMoneySpent(id,Number(total))
        customerService.updateCustomerShoppingCart(id,new Map)
        
        res.redirect('/buyPage/complete')
    }
    else{
        res.redirect('/cart')
    }

})

module.exports = router