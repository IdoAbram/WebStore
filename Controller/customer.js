const customerService = require('../services/customers');

const createCustomer = async (req, res) => { //Could be done with the builder design pattern
    const newCustomer = await customerService.createCustomer(req.body.firstName,req.body.lastName,req.body.address,req.body.password);
    res.json(newCustomer);
};

const getCustomers = async (req, res) => { // The service should return Value Set
    const customers = await customerService.getCustomers();
    res.json(customers);
};

const getCustomer = async (req, res) => { //The service should put all customers in hashmap
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) {
        return res.status(404).json({ errors: ['Customer not found'] });
    }

    return customer;
};

const updateCustomerAttribute = async (req, res) => { //Update the customer according to the change attribute with Proxy Design Pattern


    var customer = getCustomer(req,res);
    if(!customer)
       return;
    await customerService.setAttribute(req.params.id,req.body.change);   


  };


  const searchCustomer = async (req,res) =>{

    //Check meaning.

  }
  

  const deleteCustomer = async (req, res) => {
    const customer = await customerService.deleteCustomer(req.params.id);
    if (!customer) {
      return res.status(404).json({ errors: ['customer not found'] });
    }
  
    res.send();
  };

  module.exports = {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomerAttribute,
    deleteCustomer,
    searchCustomer
  };