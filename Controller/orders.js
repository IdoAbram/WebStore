const ordersService = require('../Services/Orders');

const createOrders = (req, res) => {
    const newOrders =  ordersService.createOrders(req.body.priceOfOrder,req.body.shippingPrice,
        req.body.shippingCompany,new Date(req.body.dateIssued),req.body.expectedArrival,req.body.products,req.session.user);
    return newOrders;
};


const getOrders =  (req, res) => { 
    const orders = ordersService.getOrders({});
    return orders;
}


function getOrdersByFilter(filter){
    const orders = ordersService.getOrders(filter);
    return orders;
}

const getOrdersById = (req, res) => { 
    const order = ordersService.getOrdersById(req.params.id)

    if(!order){
        order = null;
    }
   
    return order;
}

const updateOrdersPriceOfOrder = async (req, res) => {
    ordersService.updateOrdersPriceOfOrder(req.params.id,req.body.priceOfOrder);
};

const updateOrdersShippingPrice = async (req, res) => {
    ordersService.updateOrdersShippingPrice(req.params.id,req.body.shippingPrice);
};

const updateOrdersShippingCompany = async (req, res) => {
    ordersService.updateOrdersShippingCompany(req.params.id,req.body.shippingCompany);
};

const updateOrdersDateIssued = async (req, res) => {
    ordersService.updateOrdersDateIssued(req.params.id,req.body.dateIssued);
};

const updateOrdersExpectedArrival = async (req, res) => {
    ordersService.updateOrdersExpectedArrival(req.params.id,req.body.expectedArrival);
};

const updateOrdersProducts = async (req, res) => {
    ordersService.updateOrdersProducts(req.params.id,req.body.products);
};


module.exports = {
    createOrders,
    getOrdersById,
    getOrders,
    getOrdersByFilter,
    updateOrdersPriceOfOrder,
    updateOrdersShippingPrice,
    updateOrdersShippingCompany,
    updateOrdersDateIssued,
    updateOrdersExpectedArrival,
    updateOrdersProducts
}







