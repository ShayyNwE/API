const Product = require('../models/Product');
const Category = require('../models/Category');

// Lister les produits
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouveau produit
exports.createProduct = async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;
    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(400).json({ error: 'Catégorie inexistante' });
    const product = await Product.create({ name, price, categoryId });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Modifier un produit
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, categoryId } = req.body;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });
    const category = await Category.findByPk(categoryId);
    if (!category) return res.status(400).json({ error: 'Catégorie inexistante' });
    product.name = name;
    product.price = price;
    product.categoryId = categoryId;
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un produit
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: 'Produit non trouvé' });
    await product.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
