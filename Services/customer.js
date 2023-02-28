const Customer = require('../Model/Schemas/Customer');

const createCustomer = async (firstName, lastName,address,password) => {
    const Customer = new Customer({
        firstName : firstName,
        lastName : lastName,
        address : address,
        password : password
    });

    return await Customer.save();
};

const getCustomerById = async (id) => {
    return await Customer.findById(id);
};

const getCustomers = async () => {
    return await Customer.find({});  // Return all customers that satsify nothing (Return Everyone)
};

const updateCustomerName = async (id, firstName,lastName) => {
   
    Customer.findOneAndUpdate({_id:id},{Name:firstName,lastName:lastName});

};

const updateCustomerAddress = async (id, address) => {
   
    Customer.findOneAndUpdate({_id:id},{address:address});

};

const updateCustomerMoneySpent = async (id, money) => {
   
    Customer.findOneAndUpdate({_id:id},{moneySpent:money});

};

const updateCustomerWishList = async (id, WishList) => {
   
    Customer.findOneAndUpdate({_id:id},{WishList:WishList});

};

const updateCustomerShoppingCart = async (id, shoppingCart) => {
   
    Customer.findOneAndUpdate({_id:id},{shoppingCart:shoppingCart});

};

const updateCustomerOrders = async (id, orders) => {
   
    Customer.findOneAndUpdate({_id:id},{orders:orders});

};

const updateCustomerMail = async (id, email) => {
   
    Customer.findOneAndUpdate({_id:id},{email:email});

};

const updateCustomerPassword = async (id, newPass) => {
   
    Customer.findOneAndUpdate({_id:id},{password:newPass});

};

const updateCustomerCreditcards = async (id, creditcards) => {
   
    Customer.findOneAndUpdate({_id:id},{creditCards:creditcards});

};

const deleteCustomer = async (id) => {
    
    Customer.deleteOne({_id:id})

}

const deleteCustomersByName = async(name) =>{
    Customer.delete({Name:name});
}

module.exports = {
    createCustomer,
    getCustomerById,
    getCustomers,
    updateCustomerName,
    updateCustomerAddress,
    updateCustomerMoneySpent,
    updateCustomerWishList,
    updateCustomerShoppingCart,
    updateCustomerOrders,
    updateCustomerMail,
    updateCustomerPassword,
    updateCustomerCreditcards,
    deleteCustomersByName,
    deleteCustomer
}