var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

/* GET home page. */

router.get('/', function(req, res){
  res.render("index");
});

router.get("/contacto", indexController.contacto);




module.exports = router;
