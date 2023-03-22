const express = require("express")
const router = express.Router();

const ordersController = require('../Controller/orders')

router.get('/create', async (req,res)=>{


   res.render('../View/Orders/create')

})


router.get('/get', async (req,res)=>{

    res.json(await ordersController.getOrders())
 
 })

router.post('/create',ordersController.createOrders)

router.get('/spec', (req,res)=>{
  res.render("../View/Graphs/graph")
})

module.exports = router