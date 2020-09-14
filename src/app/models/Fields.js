const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Fields extends Model {
  static init(sequelize) {
    super.init({
      code: Sequelize.STRING,
      latitude: Sequelize.STRING,
      longitude: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.Farms, { foreignKey: 'id_farm', as: 'owner' });
  }
}

module.exports = Fields;