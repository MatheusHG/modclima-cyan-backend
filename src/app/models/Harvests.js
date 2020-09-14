const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Harvests extends Model {
  static init(sequelize) {
    super.init({
      code: Sequelize.STRING,
      start_date: Sequelize.DATE,
      end_date: Sequelize.DATE
    }, {
      sequelize,
    });
  }
  
  static associate(models) {
    this.belongsTo(models.Mills, { foreignKey: 'id_mill', as: 'owner' });
  }
}

module.exports = Harvests;