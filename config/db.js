const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestion_produits', 'root', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie !');
  })
  .catch(err => {
    console.error('Impossible de se connecter à la base de données :', err);
  });

module.exports = sequelize;
