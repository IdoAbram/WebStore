const express = require("express")
const router = express.Router();
const customerController = require('../Controller/Customer')

router.get('/',async (req,res)=>{
    const customers = await customerController.getCustomers({});
    res.render("../View/LoginPage/loginPage",{customers})
})

module.exports = router;