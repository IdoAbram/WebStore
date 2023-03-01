const customerService = require('../Services/Customer');

const createCustomer = async (req, res) => {
   //Could be done with the builder design pattern
    const newCustomer = await customerService.createCustomer(req.body.firstName,req.body.lastName,req.body.address,req.body.email,req.body.password);
    return newCustomer;
};

const getCustomers = async (req, res) => { // The service should return Value Set
    const customers = await customerService.getCustomers();
    return customers;
};

const getCustomerById = async (req, res) => { //The service should put all customers in hashmap
    const customer = await customerService.getCustomerById(req.params.id);
    if (!customer) {
        return res.status(404).json({ errors: ['Customer not found'] });
    }

    return customer;
};

//Update the customer according to the change attribute with Proxy Design Pattern
const updateCustomerName = async (req, res) => { 

    customerService.updateCustomerName(req.params.id,req.body.name,req.body.lastName);
    res.json(customer);   

};

const updateCustomerAddress = async (req, res) => { 

  customerService.updateCustomerAddress(req.params.id,req.body.name);
    res.json(customer);   

  };

  const updateCustomerMoneySpent = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.money);
    res.json(customer);   

  };

  const updateCustomerWishList = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.wishList);
    res.json(customer);   

  };

  const updateCustomerShoppingCart = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.shoppingCart);
    res.json(customer);   

  };
  

  const updateCustomerOrders = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.Orders);
    res.json(customer);   

  };

  const updateCustomerMail = async (req, res) => { 

    customerService.updateCustomerMail(req.params.id,req.body.mail);
    res.json(customer);   

  };

  const updateCustomerPassword = async (req, res) => { 

    customerService.updateCustomerPassword(req.params.id,req.body.password);
    res.json(customer);   

  };
  
  const updateCustomerCreditcard = async (req, res) => { 

    customerService.updateCustomerPassword(req.params.id,req.body.credicards);
    res.json(customer);   

  };


  const getCount = async (req,res) => {
    return await customerService.getCount();
  }
  

  const deleteAllCustomers = async(req,res)=>{
    await customerService.deleteAll();
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
    getCustomerById,
    updateCustomerName,
    updateCustomerAddress,
    updateCustomerMoneySpent,
    updateCustomerWishList,
    updateCustomerShoppingCart,
    updateCustomerOrders,
    updateCustomerMail,
    updateCustomerPassword,
    updateCustomerCreditcard,
    deleteCustomer,
    getCount,
    deleteAllCustomers
  };