var express = require('express');
var router = express.Router();
const User = require('../model/user');
const mongoose = require('mongoose');
const upload = require('../config/multer');




/* GET users listing. */
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
router.post('/', upload.single('file'), (req, res, next) => {
console.log(req)
  let userToUpdate = {
    name: req.body.name,
    surname: req.body.surname,
    profilePic:  `http://localhost:3000/uploads/${req.file.filename}`
  }

  console.log(userToUpdate)

  var userId = req.body._id.toString();
  userId = mongoose.Types.ObjectId(userId)

  console.log(userId)
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
