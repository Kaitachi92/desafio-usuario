import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'your_database_name',
  dialect: 'postgres', // or 'mysql' depending on your choice
  username: 'your_username',
  password: 'your_password',
  host: 'localhost',
  port: 5432, // or 3306 for MySQL
  models: [__dirname + '/../models'], // path to your models
});

export default sequelize;