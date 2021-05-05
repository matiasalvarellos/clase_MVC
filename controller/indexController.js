const db = require("../database/models")

module.exports = {
  home: function(req, res){
    res.render("index")
  },
  contacto: function (req, res) {
    res.render("contacto")
  },
  listProducts: function(req,res){
    
  }

}