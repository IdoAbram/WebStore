const GiftCard = require('../Model/Schemas/GiftCard');

const createGiftCard = async (price,Description,isBought) => {
    if(!isBought){
        isBought=false;
    }

    const giftCard = new GiftCard({price:price,Description:Description,isBought:isBought})

    return await giftCard.save();
};

const deleteGiftCardById = async(id)=>{
    await GiftCard.deleteOne({_id:id})
}

const getGiftCardById = async (id) => {
    return await GiftCard.findById(id);
};

const getGiftCards = async (filter) => {
    return await GiftCard.find(filter);  // Return all GiftCards that satsify the filter (json format)
};

const updateGiftCardPrice = async (id, price) => {
    await GiftCard.findOneAndUpdate({_id:id},{price:price});
};

const updateGiftCardDescription = async (id, Description) => {
    await GiftCard.findOneAndUpdate({_id:id},{Description:Description});
};
const deleteAll = async() => {
    await GiftCard.deleteMany({});
}

module.exports = {
    createGiftCard,
    getGiftCardById,
    getGiftCards,
    updateGiftCardPrice,
    updateGiftCardDescription,
    deleteAll,
    deleteGiftCardById
}