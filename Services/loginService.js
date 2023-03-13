const Customer = require("../Model/Schemas/Customer");
//const Admin = require("../Model/Schemas/Admin");
//const Supplier = require("../Model/Schemas/Supplier");

async function login(fName,lName,password){
    const customer = await Customer.findOne({Name: fName,lastName:lName,password:password});
    if( customer != null){return "customer";}
    //const admin = await Admin.findOne({Name: fName,lastName:lName,password:password});
    //if( admin != null){return "admin";}
    //const supplier = await Supplier.findOne({Name: fName,lastName:lName,password:password});
    //if( Supplier != null){return "supplier";}
    return null;
}

module.exports = {
    login,
}