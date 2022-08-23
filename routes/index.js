var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"i phone 13",
      category:'mobile',
      describe:"whis is good phone",
      image:"https://th.bing.com/th/id/OIP.bDuCcue5DW9OVWmDI4siuwHaHa?pid=ImgDet&rs=1"
    },
    {
      name:"one plus 10",
      category:'mobile',
      describe:"whis is good phone",
      image:"https://i.ebayimg.com/images/g/SbkAAOSw7FZgcdcg/s-l300.jpg"
    },
    {
      name:"Nothing",
      category:'mobile',
      describe:"whis is good phone",
      image:"https://www.smartprix.com/bytes/wp-content/uploads/2022/06/Nothing-phone-1-1.jpg"

    },
    {
      name:"Samsung Galaxy s22",
      category:'mobile',
      describe:"whis is good phone",
      image:"https://th.bing.com/th/id/OIP.hY9A-mWD16RfyU_lBcn8WQHaEK?pid=ImgDet&rs=1"
    },

    

    
  ]
  res.render('index', { products });
});

module.exports = router;
