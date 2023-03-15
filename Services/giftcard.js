const GiftCard = require('../Model/Schemas/GiftCard');

const createGiftCard = async (Discount, price,code,Description) => {

    const GiftCard = new GiftCard({Discount:Discount,price:price,code:code,Description:Description})

    return await GiftCard.save();
};

const getGiftCardById = async (id) => {
    return await GiftCard.findById(id);
};

const getGiftCards = async (filter) => {
    return await GiftCard.find(filter);  // Return all GiftCards that satsify the filter (json format)
};

const updateGiftCardDiscount = async (id, Discount) => {
    await Customer.findOneAndUpdate({_id:id},{Discount:Discount});
};

const updateGiftCardPrice = async (id, price) => {
    await Customer.findOneAndUpdate({_id:id},{price:price});
};

const updateGiftCardCode = async (id, code) => {
    await Customer.findOneAndUpdate({_id:id},{code:code});
};

const updateGiftCardDescription = async (id, Description) => {
    await Customer.findOneAndUpdate({_id:id},{Description:Description});
};

module.exports = {
    createGiftCard,
    getGiftCardById,
    getGiftCards,
    updateGiftCardDiscount,
    updateGiftCardPrice,
    updateGiftCardCode,
    updateGiftCardDescription
}