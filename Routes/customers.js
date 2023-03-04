const express = require("express")
const router = express.Router();
const customerController = require('../Controller/Customer') //Controller API for using the mongoose methods

router.get('/get', async (req,res)=>{ 
    const customers = await customerController.getCustomers();
    res.render("../View/Customer/getCustomers",{customers})
})

router.get('/create',async (req,res)=>{
    res.render("../View/Customer/makeCustomer")
})

router.route('/create').post(customerController.createCustomer)

router.route('/delete').get(async function (req,res){
    await customerController.deleteAllCustomers()
    res.redirect("/customers/get")
});
 
router.route('/update/:id').get(async (req,res)=>{
    const customer = await customerController.getCustomerById(req,res);
    if(!customer){
        await res.json({message:"Not Found"})
        return;
    }

    custID = req.params.id
    res.render("../View/Customer/updateCustomer",{custID,customer})

})

router.route('/update/:id').post(async (req,res)=>{

    customerController.updateAll(req,res);
})

module.exports = router
