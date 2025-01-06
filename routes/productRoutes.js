const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Lister les produits
router.get('/', productController.getProducts);

// Créer un nouveau produit
router.post('/', productController.createProduct);

// Modifier un produit
router.put('/:id', productController.updateProduct);

// Supprimer un produit
router.delete('/:id', productController.deleteProduct);

module.exports = router;
