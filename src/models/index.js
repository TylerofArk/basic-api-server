'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const dogSchema = require('./dog.schema');
// 'postgres://localhost:5432/api-app'

const DATABASE_URL = process.env.DATABASE_URL === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;


// Instantiates our database(create DB is it doesn't)
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create DogModel with our Schema
const DogModel = dogSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, DogModel};
