const db = require("../database/models")

module.exports = {
  home:  function(req, res) {
    res.render("index");
  },
  contacto:  function(req, res) {
    res.render("contacto")
  },
  list: async function(req, res){
    //modelo
    let products = await db.Product.findAll()

    //vistas
    res.render("products", {products})
    
  }

}
