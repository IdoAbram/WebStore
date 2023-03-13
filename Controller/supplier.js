const supplierService = require('../Services/supplier');

const createSupplier =  (req, res) => {
    const newSupplier =  supplierService.createSupplier(req.body.firstName,req.body.lastName,req.body.address,req.body.email,req.body.password);
    return newSupplier;
};

const getCustomers =  (req, res) => { 
    const supplier =  supplierService.getSupplier({});
    return supplier;
};


function getCustomersByFilter(filter){
    const supplier = supplierService.getSupplier(filter);
    return supplier;
}

const getCustomerById = (req, res) => { 
    var supplier =  supplierService.getSupplierById(req.params.id);

    if(!supplier){
        supplier = null;
    }

    return supplier;
};

const deleteAllSuppliers = (req,res)=>{
    supplierService.deleteAll();
 }

 module.exports = {
    createSupplier,
    getCustomers,
    getCustomersByFilter,
    getCustomerById,
    deleteAllSuppliers
 }