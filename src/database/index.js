import { Sequelize } from "sequelize";
import databaseConfig from '../config/database.mjs'
import Student from "../models/Students.js";
import User from "../models/Users.js";

const models = [Student, User]

const connection = new Sequelize(databaseConfig.development.database, databaseConfig.development.username, databaseConfig.development.password, {
  host: databaseConfig.development.host,
  dialect: 'mariadb', // ou substitua 'mariadb' pelo dialeto correspondente se estiver usando outro banco de dados
  define: {
    timestamps: databaseConfig.development.define.timestamps,
    underscored: databaseConfig.development.define.underscored,
    underscoredAll: databaseConfig.development.define.underscoredAll,
    createdAt: databaseConfig.development.define.createdAt,
    updatedAt: databaseConfig.development.define.updatedAt
  },
  dialectOptions: {
    timezone: databaseConfig.development.dialectOptions.timezone
  },
  timezone: databaseConfig.development.timezone
});

models.forEach(model => {
  model.init(connection)
});
