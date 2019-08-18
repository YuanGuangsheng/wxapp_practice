var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var obj = [
    {
      "title": "香港闹这么凶 中央为什么还不出手？",
      "type": "时政",
      "picUrl": "http://localhost:3000/static/newspic_001.jpg"
    },
    {
      "title": "一中学8名学生集体放弃清华北大！原因让人意外",
      "type": "教育",
      "picUrl": "http://localhost:3000/static/newspic_002.jpg"
    },
    {
      "title": "浙G25567环卫工人，你已被各路网友围观……",
      "type": "社会",
      "picUrl": "http://localhost:3000/static/newspic_003.jpg"
    },
  ]
  res.json(obj)
});

router.get('/set', function(req, res, next) {
  var obj = {
    "status": "ok",
  }
  res.json(obj)
});

module.exports = router;
