const Review = require('../Model/Schemas/Review');

const createReview = async (Title,userId,ProductId,text,rating,Images_Videos) => {

    const review = new Review({Title:Title,userId:userId,ProductId:ProductId,text:text,Rating:rating,Images_Videos:Images_Videos})

    return await review.save();
};

const deleteAll = async() => {
    await Review.deleteMany({})
};

const getReviewById = async (id) => {
    return await Review.findById(id);
};

const getReviews = async (filter) => {
    return await Review.find(filter);  // Return all Reviews that satsify the filter (json format)
};

const updateReviewTitle = async (id, Title) => {
    await Review.findOneAndUpdate({_id:id},{Title:Title});
};

const updateReviewUserId = async (id, userId) => {
    await Review.findOneAndUpdate({_id:id},{userId:userId});
};

const updateReviewProductId = async (id, ProductId) => {
    await Review.findOneAndUpdate({_id:id},{ProductId:ProductId});
};

const updateReviewText = async (id, text) => {
    await Review.findOneAndUpdate({_id:id},{text:text});
};

const updateReviewRating = async (id, rating) => {
    await Review.findOneAndUpdate({_id:id},{Rating:rating});
};

const updateReviewImagesVideos = async (id, ImagesVideos) => {
    await Review.findOneAndUpdate({_id:id},{Images_Videos:ImagesVideos});
};

module.exports = {
    createReview,
    getReviewById,
    getReviews,
    updateReviewTitle,
    updateReviewUserId,
    updateReviewProductId,
    updateReviewText,
    updateReviewRating,
    updateReviewImagesVideos,
    deleteAll
}