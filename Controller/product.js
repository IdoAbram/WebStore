const productService = require('../Services/product');

const createProduct = (req, res) => {
    const newProduct =  productService.createProduct(req.body.price,req.body.suppID,req.body.Description,req.body.shortDescription,req.body.amountAvailable,req.body.pictures,req.body.tags);
    return newProduct;
};

const getProducts = (req, res) => { 
    const products =  productService.getProducts({});
    return products;
};


function getProductsByFilter(filter){
    const products = productService.getProducts(filter);
    return products;
}

const getProductById =  (req, res) => { 
    var product =  productService.getProductById(req.params.id);

    if(!product){
     product = null;
    }

    return product;
};


const updateAll =  (req,res) =>{


  if(req.body.title)
       updateProductTitle(req,res);
  if(req.body.price)
       updateProductPrice(req,res);
  if(req.body.suppID)
       updateProductSuppId(req,res);
  if(req.body.Description)
       updateProductDescription(req,res);
  if(req.body.shortDescription)
       updateProductShDescription(req,res);
  if(req.body.amountAvailable)
       updateProductAmAvailable(req,res);
  if(req.body.pictures)
       updateProductPictures(req,res);
  if(req.body.tags)
       updateProductTags(req,res);
     
  
  
  
}

const updateProductTitle = async (req, res) => { 
    productService.updateProductTitle(req.params.id,req.body.title);
};

const updateProductPrice = async (req, res) => { 
    productService.updateProductPrice(req.params.id,req.body.price);
};

const updateProductSuppId = async (req, res) => { 
    productService.updateProductSupplierId(req.params.id,req.body.suppID);
};

const updateProductDescription = async (req, res) => { 
    productService.updateProductDescription(req.params.id,req.body.Description);
};

const updateProductShDescription = async (req, res) => { 
    productService.updateProductShortDescription(req.params.id,req.body.shortDescription);
};
  

const updateProductAmAvailable = async (req, res) => { 

    productService.updateProductAmAvailable(req.params.id,req.body.amountAvailable);
     

};

  const updateProductPictures = async (req, res) => { 
    productService.updateProductPictures(req.params.id,req.body.pictures);

  };

  const updateProductTags = async (req, res) => { 
    productService.updateProductTags(req.params.id,req.body.tags);
  };
  


  const getCount = (req,res) => {
    return productService.getCount();
  }
  

  const deleteAllProducts = (req,res)=>{
     productService.deleteAll();
  }
  

  const deleteProduct = (req, res) => {
    const product = productService.deleteProduct(req.params.id);
    if (!product) {
      return res.status(404).json({ errors: ['product not found'] });
    }
  
  };

  module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductTitle,
    updateProductPrice,
    updateProductSuppId,
    updateProductDescription,
    updateProductShDescription,
    updateProductAmAvailable,
    updateProductPictures,
    updateProductTags,
    deleteProduct,
    getCount,
    deleteAllProducts,
    updateAll,
    getProductsByFilter
  };