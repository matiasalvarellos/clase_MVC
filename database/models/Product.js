module.exports = function (sequelize, dataTypes) {

  const Product = sequelize.define("Product", {
    name: dataTypes.STRING,
    price: dataTypes.STRING,
    stock: dataTypes.STRING,
  });

  return Product;
}