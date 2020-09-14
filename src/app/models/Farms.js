const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Farms extends Model {
  static init(sequelize) {
    super.init({
      code: Sequelize.STRING,
      name: Sequelize.STRING
    }, {
      sequelize,
    });
  }
  
  static associate(models) {
    this.belongsTo(models.Harvests, { foreignKey: 'id_harvest', as: 'owner' });
  }
}

module.exports = Farms;