import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

export default {
  development: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'mariadb',
    define: {
      timestamps: 'America/Sao_Paulo',
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
    modelsPath: resolve(__dirname, 'src', 'models'),
    migrationsPath: resolve(__dirname, 'src', 'database', 'migrations'),
    seedersPath: resolve(__dirname, 'src', 'database', 'seeds'),
  },
  test: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'mariadb',
    define: {
      timestamps: 'America/Sao_Paulo',
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
    modelsPath: resolve(__dirname, 'src', 'models'),
    migrationsPath: resolve(__dirname, 'src', 'database', 'migrations'),
    seedersPath: resolve(__dirname, 'src', 'database', 'seeds'),
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    dialect: 'mariadb',
    define: {
      timestamps: 'America/Sao_Paulo',
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
    },
    timezone: 'America/Sao_Paulo',
    modelsPath: resolve(__dirname, 'src', 'models'),
    migrationsPath: resolve(__dirname, 'src', 'database', 'migrations'),
    seedersPath: resolve(__dirname, 'src', 'database', 'seeds'),
  },
};
