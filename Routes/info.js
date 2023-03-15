const express = require("express");
const router = express.Router();


router.get('/', async (req,res)=>{    
    res.render("../View/Info/info");
})



module.exports=router;