var express = require('express');
var router = express.Router();
const productHelper = require('../helpers/product-helpers');
var userhelpers=require('../helpers/user-helper');
/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.session.user
 
  productHelper.getAllProducts().then((products)=>{
    console.log(products);
    res.render('user/view-products',{products,user})
  })
});
router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
    res.render('user/login',{"loginerr":req.session.loginErr})
     req.session.loginErr=false
}
  

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
  router.post('/login',(req,res)=>{
    userhelpers.doLogin(req.body).then((response)=>{
      if(response.status){
        req.session.loggedIn=true
        req.session.user=response.user
        console.log(response);
        res.redirect('/')
      }else{
        req.session.loginErr=true
        res.redirect('/login')
        
      }
    })
    
  })
  router.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
  })


module.exports = router;
