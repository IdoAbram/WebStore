const ReviewService = require('../Services/Review');

const createReview =  (req, res) => {
    const newReview =  ReviewService.createReview(req.body.Title,req.body.userId,req.body.ProductId,req.body.text,
        req.body.rating,req.body.ImagesVideos);
    return newReview;
};

const getReviews =  (req, res) => { 
    const Reviews =  ReviewService.getReviews({});
    return Reviews;
};


function getReviewsByFilter(filter){
    const Reviews = ReviewService.getReviews(filter);
    return Reviews;
}

const getReviewById = (req, res) => { 
    const Review = ReviewService.getReviewById(req.params.id)

    if(!Review){
        Review = null;
    }
   
    return Review;
}


const updateReviewTitle = async (req, res) => {
     ReviewService.updateReviewTitle(req.params.id,req.body.Title);
};

const updateReviewUserId = async (req, res) => {
    ReviewService.updateReviewUserId(req.params.id,req.body.userId);
};

const updateReviewProductId = async (req, res) => {
    ReviewService.updateReviewDiscount(req.params.id,req.body.ProductId);
};

const updateReviewText = async (req, res) => {
    ReviewService.updateReviewDiscount(req.params.id,req.body.text);
};

const updateReviewRating = async (req, res) => {
    ReviewService.updateReviewDiscount(req.params.id,req.body.rating);
};

const updateReviewImagesVideos = async (req, res) => {
    ReviewService.updateReviewImagesVideos(req.params.id,req.body.ImagesVideos);
};


module.exports = {
    createReview,
    getReviewById,
    getReviews,
    getReviewsByFilter,
    updateReviewTitle,
    updateReviewUserId,
    updateReviewText,
    updateReviewRating,
    updateReviewImagesVideos
}




