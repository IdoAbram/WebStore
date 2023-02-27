const Customer = require('../Model/Customer');

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

const updateCustomer = async (id, title) => {
    const Customer = await getCustomerById(id);
    if (!Customer)
        return null;

    Customer.title = title;
    await Customer.save();
    return Customer;
};

const deleteCustomer = async (id) => {
    const Customer = await getCustomerById(id);
    if (!Customer)
        return null;

    await Customer.remove();
    return Customer;
};

module.exports = {
    createCustomer,
    getCustomerById,
    getCustomers,
    updateCustomer,
    deleteCustomer
}