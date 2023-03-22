const express = require("express")
const path = require('path')
const router = express.Router();

const Orders = require('../Model/Schemas/Orders')
const productController = require('../Controller/product')
const Customer = require('../Model/Schemas/Customer')
const adminService = require('../Services/admin')


router.get('/graph', async (req,res)=>{


     let aggOrders = await Orders.aggregate([
        {
          $group: {
            _id: { $month: '$DateIssued' },
            averageAmountSpent: { $avg: '$PriceOfOrder' }
          }
        }
      ]).exec()


   
     res.json({aggOrders})

})


router.get('/products', async (req,res)=>{


  let aggProducts = await productController.getProducts();

  res.json({aggProducts})

})


router.get('/address', async (req,res)=>{

  let aggCustomer = await Customer.aggregate([
    {
      $group: {
        _id : '$address',
        averageAmountSpent: { $avg: '$moneySpent' }
      }
    }
  ]).exec()


  res.json({aggCustomer})

})


router.get('/', async (req,res)=>{

  const type =req.session.userType;
    const userID = req.session.user;
    const first=false;

    let user = await adminService.getAdminById(userID);


  res.render("../View/Graphs/graph.ejs",{type,user,first})
})




module.exports = router