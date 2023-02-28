const express = require("express")
const router = express.Router();
const customerController = require('../Controller/Customer')


router.get('/',(req,res)=>{
    res.send('Customer List');
})

router.get('/get',async (req,res)=>{

    const customers = await customerController.getCustomers({});
    res.render("../View/makeCustomerPage/makeCustomer",{customers})
    //const c = await customerController.getCustomers({})
    //res.send(c);
})

router.get('/create',async (req,res)=>{

    res.render('../View/makeCustomerPage/makeCustomer',{customerController})
})

module.exports = router
