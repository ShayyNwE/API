const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Lister les catégories
router.get('/', categoryController.getCategories);

// Créer une nouvelle catégorie
router.post('/', categoryController.createCategory);

// Modifier une catégorie
router.put('/:id', categoryController.updateCategory);

// Supprimer une catégorie
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
