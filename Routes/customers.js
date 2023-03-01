const express = require("express")
const router = express.Router();
const customerController = require('../Controller/customer')


router.get('/',(req,res)=>{
    res.send('Customer List');
})

router.get('/new',async (req,res)=>{

    const c = await customerController.getCustomers({})
    res.send(c);
})

module.exports = router
