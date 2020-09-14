const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Mills extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
    }, {
      sequelize,
    });
  }

}

module.exports = Mills;