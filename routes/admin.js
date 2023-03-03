var express = require('express');
const { render } = require('express/lib/response');
const productHelper = require('../helpers/product-helpers');
var router = express.Router();
//var productHelper=require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:'iphone 11',
      category:'mobile',
      description:'this is a good phone',
      image:"https://cdn1.smartprix.com/rx-i23Hwk3oU-w420-h420/apple-iphone-11.jpg"
    },
    {
      name:"one plus 7t",
      category:'mobile',
      description:"this is a good phone",
      image:"https://m.media-amazon.com/images/I/51f5c0e-qvL._SX679_.jpg"
    },
    {
      name:"oppo 10x",
      category:'mobile',
      description:"this is a good phone",
      image:"https://www.gizmochina.com/wp-content/uploads/2019/04/Oppo-Reno-10x-zoom-Jet-Black.jpg"
    },
    {
      name:"mi note 9 pro",
      category:'mobile',
      description:"this is a good phone",
      image:"https://i01.appmifile.com/webfile/globalimg/in/cms/A0F36EF9-A32C-FF2F-E2D5-1FE5124589C2!800x800!85.jpg"
    }
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
  
  productHelper.addProduct(req.body,(id)=>{
    let image=req.files.Image
    console.log(id);
    image.mv('./public/product-images/'+id+".jpg",(err,done)=>{
     if(!err){
      res.render("admin/add-product")
     } else{
      console.log(err);
     }


    })
   
    
  })
})

module.exports = router;
