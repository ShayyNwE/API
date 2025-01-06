const { Sequelize } = require('sequelize');

// Créer une connexion à la base de données MySQL sous XAMPP
const sequelize = new Sequelize('gestion_produits', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie!');
  })
  .catch((err) => {
    console.error('Impossible de se connecter à la base de données:', err);
  });

module.exports = sequelize;
