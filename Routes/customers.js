const express = require("express")
const router = express.Router();
const customerController = require('../Controller/Customer')

router.get('/get',async (req,res)=>{
    const customers = await customerController.getCustomers({});
    res.render("../View/getAllCustomersPage/getCustomers",{customers})
})

router.get('/create',async (req,res)=>{
    res.render("../View/makeCustomerPage/makeCustomer")
})


router.route('/create').post(customerController.createCustomer)

router.route('/delete').get(function (req,res){
    customerController.deleteAllCustomers
    res.redirect("/customers/get")
});
 

module.exports = router
