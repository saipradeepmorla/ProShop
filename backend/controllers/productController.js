import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'


// @desc    fetch all products
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
})

//@desc     fetch a product by id
// @route   GET /api/products/:id
// @access  public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404)
        throw new Error('Resource not found')
    }
    res.json(product);
})


export { getProducts, getProductById }