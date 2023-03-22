const customerService = require('../Services/Customer');
const { getProductById } = require('./product');

const createCustomer =  (req, res) => {
    const newCustomer =  customerService.createCustomer(req.body.firstName,req.body.lastName,req.body.address,req.body.email,req.body.password);
    return newCustomer;
};

const getCustomers =  (req, res) => { 
    const customers =  customerService.getCustomers({});
    return customers;
};


function getCustomersByFilter(filter){
    const customers = customerService.getCustomers(filter);
    return customers;
}

const getCustomerById = (req, res) => { 
    var customer =  customerService.getCustomerById(req.params.id);

    if(!customer){
     customer = null;
    }

    return customer;
};

//Update the customer according to the change attribute with Proxy Design Pattern


const updateAll =  (req,res) =>{


  if(req.body.firstName && req.body.lastName)
       updateCustomerName(req,res);
  if(req.body.address)
       updateCustomerAddress(req,res);
  if(req.body.mail)
       updateCustomerMail(req,res);
  if(req.body.password)
       updateCustomerPassword(req,res);
  if(req.body.shoppingCart)
       updateCustomerShoppingCart(req,res);
  
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

    customerService.updateCustomerWishList(req.params.id,req.body.wishList);
     

};

const updateCustomerShoppingCart = async (req, res) => { 

    customerService.updateCustomerShoppingCart(req.params.id,req.body.shoppingCart);

};
  

const updateCustomerOrders = async (req, res) => { 

    customerService.updateCustomerOrders(req.params.id,req.body.Orders);
     

};

  const updateCustomerMail = async (req, res) => { 

    customerService.updateCustomerMail(req.params.id,req.body.mail);
    

  };

  const updateCustomerPassword = async (req, res) => { 

    customerService.updateCustomerPassword(req.params.id,req.body.password);
     

  };
  
  const updateCustomerCreditcard = async (req, res) => { 

    customerService.updateCustomerCreditcards(req.params.id,req.body.creditcards);
    
  };


  const getCount = (req,res) => {
    return customerService.getCount();
  }
  

  const deleteAllCustomers = (req,res)=>{
     customerService.deleteAll();
  }
  

  const deleteCustomer = (req, res) => {
    const customer = customerService.deleteCustomer(req.params.id);
    if (!customer) {
      return res.status(404).json({ errors: ['customer not found'] });
    }
  
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
    updateAll,
    getCustomersByFilter
  };