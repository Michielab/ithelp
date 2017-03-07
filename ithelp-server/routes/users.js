var express = require('express');
var router = express.Router();
const User = require('../model/user');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json(User);
// });



router.get('/', (req, res, next) => {
  User.find({})
    .exec((err, Users) => {
      if (err) {
        return res.send(err);
      }
      return res.json(Users);
    });
});


module.exports = router;
