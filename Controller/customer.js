const Customer = require('../Model/Schemas/Customer');
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

const getCustomerById = async (req, res, next) => { //The service should put all customers in hashmap
    var customer = await customerService.getCustomerById(req.params.id);

    if(!customer){
     customer = null;
    }

    return customer;
};

//Update the customer according to the change attribute with Proxy Design Pattern


const updateAll = async (req,res) =>{


  if(req.body.firstName && req.body.lastName)
      await updateCustomerName(req,res);
  if(req.body.address)
      await updateCustomerAddress(req,res);
  if(req.body.mail)
      await updateCustomerMail(req,res);
  if(req.body.password)
      await updateCustomerPassword(req,res);
  
}

const updateCustomerName = async (req, res) => { 

    customerService.updateCustomerName(req.params.id,req.body.firstName,req.body.lastName);


};

const updateCustomerAddress = async (req, res) => { 

    customerService.updateCustomerAddress(req.params.id,req.body.address);
    

};

const updateCustomerMoneySpent = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.money);
   

};

const updateCustomerWishList = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.wishList);
     

};

const updateCustomerShoppingCart = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.shoppingCart);
      

};
  

const updateCustomerOrders = async (req, res) => { 

    customerService.updateCustomerMoneySpent(req.params.id,req.body.Orders);
     

};

  const updateCustomerMail = async (req, res) => { 

    customerService.updateCustomerMail(req.params.id,req.body.mail);
    

  };

  const updateCustomerPassword = async (req, res) => { 

    customerService.updateCustomerPassword(req.params.id,req.body.password);
     

  };
  
  const updateCustomerCreditcard = async (req, res) => { 

    customerService.updateCustomerPassword(req.params.id,req.body.creditcards);
     

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
    deleteAllCustomers,
    updateAll
  };