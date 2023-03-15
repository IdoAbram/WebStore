const Supplier = require('../Model/Schemas/Supplier');

const createSupplier = async (firstName, lastName,products,moneyGiven,outGoingOrders,pastOrders,
    email,location,password) => {

    const customer = new Supplier({Name:firstName,lastName:lastName,products:products,moneyGiven:moneyGiven,
        outGoingOrders:outGoingOrders,pastOrders:pastOrders,email:email,location:location,password:password})

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

const updateSupplierName = async (id,firstName,lastName) => {
    await Supplier.findOneAndUpdate({_id:id},{Name:firstName,lastName:lastName});
}

const updateSupplierProducts= async (id,products) => {
    await Supplier.findOneAndUpdate({_id:id},{products:products});
}

const updateSupplierLocation= async (id,location) => {
    await Supplier.findOneAndUpdate({_id:id},{location:location});
}

const updateSupplierMoneyGiven= async (id,moneyGiven) => {
    await Supplier.findOneAndUpdate({_id:id},{moneyGiven:moneyGiven});
}

const updateSupplierOutGoingOrders = async (id,outGoingOrders) => {
    await Supplier.findOneAndUpdate({_id:id},{outGoingOrders:outGoingOrders});
}

const updateSupplierPastOrders= async (id,pastOrders) => {
    await Supplier.findOneAndUpdate({_id:id},{pastOrders:pastOrders});
}

const updateSupplierEmail= async (id,email) => {
    await Supplier.findOneAndUpdate({_id:id},{email:email});
}

const updateSupplierPassword= async (id,password) => {
    await Supplier.findOneAndUpdate({_id:id},{password:password});
}






module.exports = {
    createSupplier,
    getSupplierById,
    deleteAll,
    getCount,
    getSuppliers,
    updateSupplierName,
    updateSupplierProducts,
    updateSupplierLocation,
    updateSupplierMoneyGiven,
    updateSupplierOutGoingOrders,
    updateSupplierPastOrders,
    updateSupplierEmail,
    updateSupplierPassword
}