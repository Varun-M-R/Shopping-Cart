var express = require('express');
var router = express.Router();

/* GET home page. */
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
  res.render('index', {products });
});

module.exports = router;
