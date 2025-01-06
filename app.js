const express = require('express');
const app = express();
const sequelize = require('./config/db');
const categoryRoutes = require('./routes/categoryroutes.Js');
const productRoutes = require('./routes/productRoutes');

// Middleware pour parser le corps des requêtes
app.use(express.json());

// Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// Synchronisation de la base de données et démarrage du serveur
sequelize.sync().then(() => {
  app.listen(3306, () => {
    console.log('Serveur démarré sur le port 5000');
  });
});
