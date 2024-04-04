const productModel = require("../models/productModel");
const errorHandler = require("../utils/errorhandler");


// fetch products 
const getAllProducts = async (req, res, next) => {
    try {
        const productsPerPage = 12;
        const currentPage = Number(req.query.page) || 1;
        const skipProducts = productsPerPage * (currentPage - 1);
        const key = req.query.key;

        if (!key) {
            const products = await productModel.find().limit(productsPerPage).skip(skipProducts);
            const productsCount = await productModel.countDocuments();

            return res.status(200).json({
                success: true,
                productsCount,
                products,
            });
        }

        const products = await productModel.find({
            $or: [
                { brand: { $regex: key, $options: "i" } },
                { name: { $regex: key, $options: "i" } },
                { category: { $regex: key, $options: "i" } },
                {
                    $expr: {
                        $regexMatch: {
                            input: { $concat: ["$brand", " ", "$name"] },
                            regex: key,
                            options: "i"
                        }
                    }
                }
            ]
        }).limit(productsPerPage).skip(skipProducts);

        return res.status(200).json({
            success: true,
            products
        });

    } catch (error) {
        next(error)
    }
}



// Create new product -- Admin 
const createProduct = async (req, res, next) => {
    try {
        const product = await productModel.create(req.body);

        return res.status(201).json({
            success: true,
            product
        });

    } catch (error) {
        next(error)
    }
}


// Update a product -- Admin 
const updateProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const updatedProduct = await productModel.findByIdAndUpdate(productId, req.body, { new: true });

        if (!updatedProduct) {

            return next(new errorHandler(404, "Product not found!"));
        }

        return res.status(200).json({
            success: true,
            updatedProduct
        });

    } catch (error) {
        next(error)
    }
}


// Delete a product -- Admin 
const deleteProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await productModel.findByIdAndDelete(productId);

        if (!deletedProduct) {

            return next(new errorHandler(404, "Product not found!"));
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted Successfully!"
        });

    } catch (error) {
        next(error)
    }
}


const getSingleProduct = async (req, res, next) => {
    try {
        const productId = req.params.id;
        const product = await productModel.findById(productId);

        if (!product) {

            return next(new errorHandler(404, "Product not found!"));
        }

        return res.status(200).json({
            success: true,
            product
        });

    } catch (error) {
        next(error)
    }
}


module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct }