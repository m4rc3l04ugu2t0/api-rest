import Sequelize, { Model } from 'sequelize';
import { hashSync, genSaltSync, compareSync } from 'bcrypt';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'Name invalido!',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email invalido!',
        },
        validate: {
          isEmail: {
            msg: 'Email invalido!',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 50],
            msg: 'Senha deve ter entre 8 e 50 caracteres!',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = hashSync(user.password, genSaltSync(10));
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return compareSync(password, this.password_hash);
  }
}
