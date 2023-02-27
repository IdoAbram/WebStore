const express = require("express")
const router = express.Router();
const Customer = require('../Model/Schemas/Customer.js')


router.get('/',(req,res)=>{
    res.send('Customer List');
})

router.get('/new',async (req,res)=>{

    const c = await Customer.find({})
    res.send(c);
})

module.exports = router
