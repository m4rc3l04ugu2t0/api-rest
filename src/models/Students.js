import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      firstName: Sequelize.STRING,
      secondName: Sequelize.STRING,
      email: Sequelize.STRING
    }, {
      sequelize
    })
    return this
  }
}
