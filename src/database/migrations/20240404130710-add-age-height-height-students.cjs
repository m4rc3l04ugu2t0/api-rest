/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'age', {
      type: Sequelize.INTEGER,
    });
    await queryInterface.addColumn('students', 'height', {
      type: Sequelize.FLOAT,
    });
    await queryInterface.addColumn('students', 'weight', {
      type: Sequelize.FLOAT,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('students', 'age');
    await queryInterface.removeColumn('students', 'height');
    await queryInterface.removeColumn('students', 'weight');
  },
};
