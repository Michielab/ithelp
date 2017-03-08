var express = require('express');
var router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');


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

/* GET a single User. */
router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  User.findById(req.params.id, (err, Users) => {
      if (err) {
        return res.send(err);
      }

      return res.json(Users);
    });
});


module.exports = router;
