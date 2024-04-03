import Sequelize, { Model } from "sequelize";
import { hashSync, genSaltSync } from "bcrypt"

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: "Name invalido!"
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email invalido!'
        },
        validate: {
          isEmail: {
            msg: "Email invalido!"
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 50],
            msg: "Senha deve ter entre 8 e 50 caracteres!"
          }
        }
      },
    }, {
      sequelize
    });

    this.addHook('beforeSave', (user) => {
      user.password_hash = hashSync(user.password, genSaltSync(10))
    })
    return this;
  }
}
