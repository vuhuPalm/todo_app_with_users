'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName:'todo_users',
    timestamps:false
  });
  return User;
};

module.exports.renderLogin = function(req,res) {
  let error = null
  if (req.session.messages && req.session.messages.length>0){
    error = req.session.messages[0];
  }
  res.render('users/login', {error});
}