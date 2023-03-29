const Product = require('../Model/Schemas/Product');

const createProduct = async (title, price,Supplier_Id,Description,shortDescription,amountAvailable,pictures,tags,Sizes) => {

    const product = new Product({Title:title,price:price,Supplier_Id:Supplier_Id,
        Description:Description,shortDescription:shortDescription
        ,Reviews:[],AmountAvailable:amountAvailable,IsAvailableSuppliers:true,Rating:0,Pictures:pictures.split(" "),Tags:tags.split(" "),Sizes:Sizes.split(" ")})


    return await product.save();
};

const getProductById = async (id) => {
    return await Product.findById(id);
};


const getProducts = async (filter) => {
    return await Product.find(filter);  // Return all products that satsify nothing (Return Everyone)
};

const updateProductSizes = async (id,title)=>{
    await Product.findOneAndUpdate({_id:id},{Sizes:sizes});
}

const updateProductTitle = async (id, title) => {
   
    await Product.findOneAndUpdate({_id:id},{Title:title});

};

const updateProductPrice = async (id, price) => {
   
    await Product.findOneAndUpdate({_id:id},{price:price});

};

const updateProductSupplierId = async (id, Supplier_Id) => {
   
    await Product.findOneAndUpdate({_id:id},{Supplier_Id:Supplier_Id});

};

const updateProductDescription = async (id, Description) => {
   
    await Product.findOneAndUpdate({_id:id},{Description:Description});

};

const updateProductShortDescription = async (id, shortDescription) => {
   
    await Product.findOneAndUpdate({_id:id},{shortDescription:shortDescription});

};

const updateProductReviews = async (id, Reviews) => {
   
    await Product.findOneAndUpdate({_id:id},{Reviews:Reviews});

};

const updateProductAmAvailable = async (id, amount) => {
   
    await Product.findOneAndUpdate({_id:id},{AmountAvailable:amount});

};

const updateProductAvailable = async (id, isAval) => {
   
    await Product.findOneAndUpdate({_id:id},{IsAvailableSuppliers:isAval});

};

const updateProductRating = async (id, Rating) => {
   
    await Product.findOneAndUpdate({_id:id},{Rating:Rating});

};


const updateProductPictures = async (id, pics) => {
   
    await Product.findOneAndUpdate({_id:id},{Pictures:pics});

};

const updateProductTags = async (id, tags) => {
   
    await Product.findOneAndUpdate({_id:id},{Tags:tags});

};


const deleteProduct = async (id) => {
    
    await Product.deleteOne({_id:id})

}

const deleteProductsByName = async(name) =>{
    await Product.delete({Name:name});
}

const deleteAll = async() => {
  await Product.deleteMany({});
}

const getCount = async() =>{
    return await Product.count();
}



module.exports = {
    createProduct,
    getProductById,
    getProducts,
    updateProductSizes,
    updateProductTitle,
    updateProductPrice,
    updateProductSupplierId,
    updateProductDescription,
    updateProductShortDescription,
    updateProductReviews,
    updateProductAmAvailable,
    updateProductAvailable,
    updateProductRating,
    updateProductPictures,
    updateProductTags,
    deleteProductsByName,
    deleteProduct,
    getCount,
    deleteAll
}