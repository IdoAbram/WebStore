const productService= require('../services/products');

const createProduct=async (req,res)=>{
    const newProduct=await productService.createProduct(req.body.title,req.body.price,req.body.pictures,req.body.rating,req.body.discount);
    res.json(newProduct);
};

const getProducts= async (req,res)=>{
    const product=await productService.getProduct();
    res.json(product);
};

const getProduct= async (req,res)=>{
    const product=await productService.getProductById(req.params.id);
    if(!product){
        return res.status(404).json({errors:['Product not found']});
    }
    return product;
}

const updateProductAttribute = async (req, res) => { //Update the customer according to the change attribute with Proxy Design Pattern

    var product = getProduct(req,res);
    if(!product)
       return;
    await productService.setAttribute(req.params.id,req.body.change);   
};

const deleteProduct = async (req, res) => {
    const product = await productService.deleteCustomer(req.params.id);
    if (!product) {
      return res.status(404).json({ errors: ['Product not found'] });
    }
    res.send();
};

module.exports={
    createProduct,
    getProducts,
    getProduct,
    updateProductAttribute,
    deleteProduct
};