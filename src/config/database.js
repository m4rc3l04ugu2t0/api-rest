import 'dotenv/config'

export default  {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.DATABASE_HOST,
    "dialect": "mariadb"
  },
  "test": {
    "username": "root",
    "password": 'MarceloAugustoDATABASE2050',
    "database": "school",
    "host": "localhost",
    "dialect": "mariadb"
  },
  "production": {
    "username": "root",
    "password": 'MarceloAugustoDATABASE2050',
    "database": "school",
    "host": "localhost",
    "dialect": "mariadb"
  }
}
