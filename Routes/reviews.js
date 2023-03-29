const express = require("express")
const router = express.Router();
var path = require('path')
const supplierService = require('../Services/supplier');
const customerService = require('../Services/customer');
const adminService = require('../Services/admin');


router.get('/', async (req,res)=>{

    const ors = await fetch("https://graph.facebook.com/v16.0/121786337504390/ratings?access_token=EAAMkqB1d63MBAFv3VcY9KNrScTZAr28Tmp4ZCxSCeKVJKdo6a2w4LC5VjZA2jeMeCawN1OXcnzmWhG8JDkmzNmDm8nJZBMvPjMcrDf5DaAECvMvZCrOI3xgoYhf00ZCnUROY89MTKdeYHci3znf5uUCyg4qw4R24ArSDbym0WuSklbS5ZCNU9ch8mrpqrnTlpAZD").then(res=>res.json())
    const revs = Object.values(ors)[0]    
    
    const type =req.session.userType;
    const userID = req.session.user;
    const first=false;
    let user=null;
    if(type=="customer"){
        user = await customerService.getCustomerById(userID);
    }
    else if(type=="admin"){
        user= await adminService.getAdminById(userID);
    }
    else if(type=="supplier"){
        user= await supplierService.getSupplierById(userID);
    }
    else{
        user=null;
    }

    await console.log(revs)

    res.render(('../View/Reviews/reviews'),{revs,type,user,first})
})


module.exports = router