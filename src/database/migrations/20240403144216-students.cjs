'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('student', {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
       },
       firstName: {
        type: Sequelize.STRING,
        allowNull: false
       },
       secondName: {
        type: Sequelize.STRING,
        allowNull: false
       },
       email: {
        type: Sequelize.STRING,
        allowNull: false
       },
       created_at: {
        type: Sequelize.DATE,
        allowNull: false
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false
       }
     });
  },

   down: async (queryInterface, Sequelize) => {

    return await queryInterface.dropTable('student');

  }
};