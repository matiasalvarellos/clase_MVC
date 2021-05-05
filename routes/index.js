var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController");

/* GET home page. */

router.get('/', indexController.home );

router.get("/contacto", indexController.contacto);

router.get("/products", indexController.list);




module.exports = router;
