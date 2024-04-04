'use strict';
import { hashSync } from 'bcrypt'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: "joao@gmail.com",
      password_hash: hashSync('123456', 6),
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'John Doe 2',
      email: "joao2@gmail.com",
      password_hash: hashSync('123456', 6),
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async  () => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
