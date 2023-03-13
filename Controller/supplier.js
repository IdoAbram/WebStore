const supplierService = require('../Services/supplier');

const createSupplier =  (req, res) => {
    const newSupplier =  supplierService.createSupplier(req.body.firstName,req.body.lastName,req.body.address,req.body.email,req.body.password);
    return newSupplier;
};

const getSuppliers =  (req, res) => { 
    const supplier =  supplierService.getSupplier({});
    return supplier;
};


function getSuppliersByFilter(filter){
    const supplier = supplierService.getSuppliers(filter);
    return supplier;
}

const getSupplierById = (req, res) => { 
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
    getSuppliers,
    getSuppliersByFilter,
    getSupplierById,
    deleteAllSuppliers
 }