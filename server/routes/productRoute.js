const express = require('express');
const { isAuthenticatedUser, authorizeRole } = require("../middlewares/auth");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController');
const router = express.Router();


router.route("/all").get(getAllProducts);
router.route("/:id").get(getSingleProduct);
router.route("/new").post(isAuthenticatedUser, authorizeRole("admin"), createProduct);
router.route("/:id").put(isAuthenticatedUser, authorizeRole("admin"), updateProduct);
router.route("/:id").delete(isAuthenticatedUser, authorizeRole("admin"), deleteProduct);

module.exports = router;