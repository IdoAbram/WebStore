const Customer = require("../Model/Schemas/Customer");
const Admin = require("../Model/Schemas/Admin");
const Supplier = require("../Model/Schemas/Supplier");

async function login(email, password){
    const customer = await Customer.findOne({password: password,email: email});
    if( customer != null){return "customer";}
    const admin = await Admin.findOne({password: password,Email: email});
    if( admin != null){return "admin";}
    const supplier = await Supplier.findOne({password: password,email: email});
    if( supplier != null){return "supplier";}
    return null;
}

module.exports = {
    login,
}