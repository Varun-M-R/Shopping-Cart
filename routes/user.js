var express = require('express');
var router = express.Router();
const productHelper = require('../helpers/product-helpers');
var userhelpers=require('../helpers/user-helper');
/* GET home page. */
router.get('/', function(req, res, next) {
 
  productHelper.getAllProducts().then((products)=>{
    console.log(products);
    res.render('user/view-products',{products})
  })
});
router.get('/login',(req,res)=>{
  res.render('user/login')

})
router.get('/signup',(req,res)=>{
  res.render('user/signup')

})
router.post('/signup',(req,res)=>{
  userhelpers.doSignup(req.body).then((response)=>{
    //res.render('user/signup')
   console.log(response); 
  })

  })


module.exports = router;
