const Supplier = require('../Model/Schemas/Supplier');

const createSupplier = async (firstName, lastName,address,email,password) => {

    const customer = new Supplier({Name:firstName,lastName:lastName,location:address,moneyGiven:0,pastOrders:[],products:[],outGoingOrders:[],email:email,password:password})

    return await customer.save();
};

  
const getSupplierById = async (id) => {
    return await Supplier.findById(id);
};

const deleteAll = async() => {
    await Supplier.deleteMany({})
};
  
const getCount = async() =>{
      return await Supplier.count();
};

const getSuppliers = async (filter) => {
    return await Supplier.find(filter);  // Return all suppliers that satsify the filter (json format)
};

module.exports = {
    createSupplier,
    getSupplierById,
    deleteAll,
    getCount,
    getSuppliers
}