var express = require('express');
var router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');
const upload = require('../config/multer');
const Review          =  require("../model/review");



/* GET users listing. */
router.get('/:format?', (req, res, next) => {
  if (req.query.long && req.query.lat) {
    User.where('location')
    .near({ center: { coordinates: [req.query.long, req.query.lat], type: 'Point' }, maxDistance: 2000 })
        .populate("reviews")
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

 User.findById(req.params.id, (err, user) => {
     if (err) {
       return res.send(err);
     }
    else {
      User
      .findOne({_id: req.params.id})
      .populate("reviews")
      .exec((err, Users) => {
        if (err) {
          next(err);
          return;
        }
        Review
        .find({helper: req.params.id})
        .populate("helper")
        .populate("customer")
        .exec((err, reviewHelper) => {
          if (err) {
            next(err);
            return;
          }
          console.log(Users)
     return res.json({Users, reviewHelper});
   });
    });
}
});
});


/* EDIT a User. */
router.post('/', upload.single('file'), (req, res, next) => {
  console.log("editttttttt", req)
  let userToUpdate = {
    name: req.body.name,
    surname: req.body.surname,
    email : req.body.email,
    address : req.body.address,
    location: {type: 'Point', coordinates: [req.body.long, req.body.lat]},
    description : req.body.description,
    slogan : req.body.slogan,
    role : req.body.role,
    phoneNumber : req.body.phoneNumber,
    status : req.body.status,
    price : req.body.price,
    speciality : req.body.speciality,
    profilePic:  `uploads/${req.file.filename}`

  }


  var userId = req.body._id.toString();
  userId = mongoose.Types.ObjectId(userId)
  console.log("this is user ID server" ,userId)

  User.findByIdAndUpdate(userId, userToUpdate, (err, user)=>{
    if (err) {
      console.log("GOT AN ERROR");
      next(err)
    } else {

      console.log("GOT UPDATED");
      res.json(user);
    }
  })
});

module.exports = router;
