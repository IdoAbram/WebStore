const express = require("express")
const router = express.Router();
const customerService = require('../Services/customer');
const ordersController = require('../Controller/orders');
const productService = require('../Services/product');
const ordersService = require('../Services/orders');

router.get('/create', async (req,res)=>{
   const type =req.session.userType;
   const userID = req.session.user;
   const first=false;
   let user=await customerService.getCustomerById(userID);
   res.render('../View/Orders/create',{type,user,first})
})

router.get('/my',async (req,res)=>{
   
   const type =req.session.userType;
   const userID = req.session.user;
   const first=false;
   let user=await customerService.getCustomerById(userID);
   let orders = [];
   orders = await ordersController.getOrdersByFilter({UserId:userID});
   
   res.render('../View/Orders/OrderPage',{type,user,orders,first});
})

router.get('/:id',async (req,res)=>{
   let order = await ordersController.getOrdersById(req,res);
   const type =req.session.userType;
   const userID = req.session.user;
   const first=false;
   let user=await customerService.getCustomerById(userID);
   let map = order.products;
   let array=Array.from(map);
   

   let products = [];
   for(let i=0;i<order.products.size;i++){
      let pro = await productService.getProductById(String(array[i][0].split(" ")[0]));
      products.push(pro);
   }

   res.render('../View/Orders/SpesificPage',{type,user,type,order,first,products,map});

})


router.get('/get', async (req,res)=>{

    res.json(await ordersController.getOrders())
 
 })

router.post('/create',ordersController.createOrders)

router.get('/spec', (req,res)=>{
  res.render("../View/Graphs/graph")
})

module.exports = router