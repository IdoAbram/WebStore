const Orders = require('../Model/Schemas/Orders');

const createOrders = async (priceOfOrder, shippingPrice,shippingCompany,dateIssued,expectedArrival,products) => {

    const Orders = new Orders({PriceOfOrder:priceOfOrder,ShippingPrice:shippingPrice,
        ShippingCompany:shippingCompany,DateIssued:dateIssued,ExpectedArrival:expectedArrival,products:products})

    return await Orders.save();
};

const getOrdersById = async (id) => {
    return await Orders.findById(id);
};

const getOrders = async (filter) => {
    return await Orders.find(filter);  // Return all Orderss that satsify the filter (json format)
};

const updateOrdersPriceOfOrder = async (id, priceOfOrder) => {
    await Orders.findOneAndUpdate({_id:id},{PriceOfOrder:priceOfOrder});
};

const updateOrdersShippingPrice = async (id, price) => {
    await Orders.findOneAndUpdate({_id:id},{ShippingPrice:price});
};

const updateOrdersShippingCompany = async (id, shipCompany) => {
    await Orders.findOneAndUpdate({_id:id},{ShippingCompany:shipCompany});
};

const updateOrdersDateIssued = async (id, dateIssued) => {
    await Orders.findOneAndUpdate({_id:id},{DateIssued:dateIssued});
};

const updateOrdersExpectedArrival = async (id, dateArrival) => {
    await Orders.findOneAndUpdate({_id:id},{ExpectedArrival:dateArrival});
};

const updateOrdersProducts = async (id, products) => {
    await Orders.findOneAndUpdate({_id:id},{products:products});
};




module.exports = {
    createOrders,
    getOrdersById,
    getOrders,
    updateOrdersPriceOfOrder,
    updateOrdersShippingPrice,
    updateOrdersShippingCompany,
    updateOrdersDateIssued,
    updateOrdersExpectedArrival,
    updateOrdersProducts
}