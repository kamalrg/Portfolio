var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', (req,res, next)=>{
  res.render('about', {title:'About this page'})
})
module.exports = router;
