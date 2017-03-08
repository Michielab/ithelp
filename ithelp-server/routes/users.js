var express = require('express');
var router = express.Router();
const User = require('../model/user');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json(User);
// });


router.get('/:format?', (req, res, next) => {
  User.where('location')
  .near({ center: { coordinates: [req.query.long, req.query.lat], type: 'Point' }, maxDistance: 2000 })
      .exec((err, Users) => {
        if (err) {
          return res.send(err);
        }
        return res.json(Users);
      });
  });


module.exports = router;
