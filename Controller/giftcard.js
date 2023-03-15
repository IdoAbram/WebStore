const giftCardService = require('../Services/Giftcard');

const createGiftCard =  (req, res) => {
    const newGiftCard =  giftCardService.createGiftCard(req.body.Discount,req.body.price,req.body.code,req.body.Description);
    return newGiftCard;
};

const getGiftCards =  (req, res) => { 
    const giftCards =  giftCardService.getGiftCards({});
    return giftCards;
};


function getGiftCardsByFilter(filter){
    const giftCards = giftCardService.getGiftCards(filter);
    return giftCards;
}

const getGiftCardById = (req, res) => { 
    const giftCard = giftCardService.getGiftCardById(req.params.id)

    if(!giftCard){
        customer = null;
    }
   
    return customer;
}


const updateGiftCardDiscount = async (req, res) => {
     giftCardService.updateGiftCardDiscount(req.params.id,req.body.Discount);
};

const updateGiftCardDescription = async (req, res) => {
    giftCardService.updateGiftCardDiscount(req.params.id,req.body.Description);
};

const updateGiftCardCode = async (req, res) => {
    giftCardService.updateGiftCardDiscount(req.params.id,req.body.code);
};

const updateGiftCardPrice = async (req, res) => {
    giftCardService.updateGiftCardDiscount(req.params.id,req.body.price);
};


module.exports = {
    createGiftCard,
    getGiftCardById,
    getGiftCards,
    getGiftCardsByFilter,
    updateGiftCardDiscount,
    updateGiftCardPrice,
    updateGiftCardCode,
    updateGiftCardDescription
}




