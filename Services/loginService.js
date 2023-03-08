const Customer = require("../Model/Schemas/Customer");

async function login(fName,lName,password){
    const customer = await Customer.findOne({Name: fName,lastName:lName,password:password});
    return customer != null;
}

module.exports = {
    login,
}