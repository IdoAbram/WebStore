const supplierService = require('../Services/supplier');

const createSupplier =  (req, res) => {
    const newSupplier =  supplierService.createSupplier(req.body.firstName,req.body.lastName,req.body.products,
        req.body.moneyGiven, req.body.outGoingOrders,req.body.pastOrders,req.body.email,
        req.body.location,req.body.password);
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



const updateSupplierName = async (req, res) => { 
    supplierService.updateSupplierName(req.params.id,req.body.firstName,req.body.lastName);
};

const updateSupplierProducts = async (req, res) => { 
    supplierService.updateSupplierName(req.params.id,req.body.products);
};

const updateSupplierLocation = async (req, res) => { 
    supplierService.updateSupplierLocation(req.params.id,req.body.location);
};

const updateSupplierMoneyGiven = async (req, res) => { 
    supplierService.updateSupplierMoneyGiven(req.params.id,req.body.moneyGiven);
};

const updateSupplierOutGoingOrders= async (req, res) => { 
    supplierService.updateSupplierOutGoingOrders(req.params.id,req.body.outGoingOrders);
};

const updateSupplierPastOrders = async (req, res) => { 
    supplierService.updateSupplierPastOrders(req.params.id,req.body.pastOrders);
};

const updateSupplierEmail = async (req, res) => { 
    supplierService.updateSupplierEmail(req.params.id,req.body.email);
};

const updateSupplierPassword = async (req, res) => { 
    supplierService.updateSupplierPassword(req.params.id,req.body.password);
};

 module.exports = {
    createSupplier,
    getSuppliers,
    getSuppliersByFilter,
    getSupplierById,
    deleteAllSuppliers,
    updateSupplierEmail,
    updateSupplierLocation,
    updateSupplierMoneyGiven,
    updateSupplierName,
    updateSupplierOutGoingOrders,
    updateSupplierPassword,
    updateSupplierPastOrders,
    updateSupplierProducts
 }