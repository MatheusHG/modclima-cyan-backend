require('dotenv').config();
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Mills = require('../app/models/Mills');
const Harvests = require('../app/models/Harvests');
const Farms = require('../app/models/Farms');
const Fields = require('../app/models/Fields');

const models = [Mills, Harvests, Farms, Fields];

class DataBase {
    constructor() {
      this.init();
    }
  
    init() {
      this.connection = new Sequelize(dbConfig);
  
      models.map((model) => model.init(this.connection));
      models.map((model) => model.associate && model.associate(this.connection.models));
    }
  }
  
  module.exports = new DataBase();