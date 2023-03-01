const express = require("express")
const router = express.Router();
const customerController = require('../Controller/Customer')


router.get('/get',async (req,res)=>{

    const customers = await customerController.getCustomers({});
    res.render("../View/getAllCustomersPage/getCustomers",{customers})
    //const c = await customerController.getCustomers({})
    //res.send(c);
})

router.get('/create',async (req,res)=>{

    res.render("../View/makeCustomerPage/makeCustomer")
    
})


router.route('/create').post(customerController.createCustomer)
router.route('/delete').get(function (req,res,next){

    customerController.deleteAllCustomers
    res.redirect("/customers/get")
});
 

module.exports = router
