var express = require('express');
var router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json(User);
// });


router.get('/:format?', (req, res, next) => {
  if (req.query.long && req.query.lat) {
    User.where('location')
    .near({ center: { coordinates: [req.query.long, req.query.lat], type: 'Point' }, maxDistance: 2000 })
        .exec((err, Users) => {
          if (err) {
            return res.send(err);
          }
          return res.json(Users);
        });
  } else {
    next()
  }

  });

/* GET a single User. */
router.get('/:id', (req, res) => {
  console.log("hello")
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


/* EDIT a User. */
router.put('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    surname: req.body.surname,
    phoneNumber: req.body.phoneNumber,
    profilePic: req.body.image
  }, (err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({
      message: 'Phone updated successfully'
    });
  });
})


module.exports = router;
