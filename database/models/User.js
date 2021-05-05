module.exports = function (sequelize, dataTypes) {

  const User = sequelize.define("User", {
    name: dataTypes.STRING,
    last_name: dataTypes.STRING,
    age: dataTypes.STRING,
  });

  return User;
}