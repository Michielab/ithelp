var express = require('express');
var router = express.Router();
const User = require('../model/user');
const Booking = require('../model/booking');
const mongoose = require('mongoose');
const upload = require('../config/multer');
var jwt = require('jsonwebtoken');
var jwtOptions = require('../config/jwtOptions');


// router.get('/users/book'), function(req, res, next) {
//   res.render('booking/booktaker');
// });

router.post('/', (req, res, next) => {
console.log('testserver')

  var  date = req.body.date;
  var  starttime = req.body.starttime;
  var  mainSubject = req.body.mainSubject;
  var  subSubject = req.body.subSubject;
  var  issue = req.body.issue;
  var  message = req.body.message;
  var  customer = req.body.customer;
  var  helper = req.body.helper;
  var  acceptedByHelper = false;
  var  declinedByHelper = false;
  // var starttimeNumber = parseInt(starttime);\

  var newBooking = Booking({
    date,
    starttime,
    mainSubject,
    subSubject,
    issue,
    message,
    customer,
    helper,
    acceptedByHelper,
    declinedByHelper,
  });

  newBooking.save((err, booking) => {
    if (err) {
      res.render("auth/signup", {
      });
    } else {
      User.findByIdAndUpdate({_id: customer},{$push: { bookings: booking._id }}, (err) => {
        if (err) {
          console.log("GOT AN ERROR1");
          next(err);
        } else {  User.findByIdAndUpdate({_id: helper},{$push: { bookings: booking._id }}, (err) => {
          if (err) {
            console.log("GOT AN ERROR2");
            next(err);
          } else {
            Booking
            .findOne({_id: booking._id})
            .populate("customer")
            .populate("helper")
            .exec((err, booking) => {
              if (err) {
                next(err);
                return;
              }
              res.json(booking);
            });}
          });
        }
      });
    }
  });

})


router.get('/:id', (req, res, next) => {
  console.log(req.params.id)
       User
      .findOne({_id: req.params.id})
      .populate("bookings")
      .exec((err, users) => {
        if (err) {
          next(err);
          return;
          }

          Booking
          .find({customer: req.params.id})
          .populate("helper")
          .populate("customer")
          .exec((err, bookingCustomer) => {
            if (err) {
              next(err);
              return;
            }

            Booking
            .find({helper: req.params.id})
            .populate("helper")
            .populate("customer")
            .exec((err, bookingHelper) => {
              if (err) {
                next(err);
                return;
              }


            console.log("users", users)
            console.log("booking", bookingCustomer)
            console.log("helper", bookingHelper)
            res.json({bookingHelper,bookingCustomer, users});

          });
      });
    });
})

//
// router.get('/booking/:bookingId', auth.checkLoggedIn('You must be login', '/login'), (req, res, next) => {
//   let bookingId = req.params.bookingId;
//   Request.findById(bookingId, (err, booking) => {
//     if (err) {  next(err); }
//     console.log("HERE IS THE BOOKING");
//     User
//    .findOne({_id: req.user._id})
//    .populate("pets")
//    .populate("reservations")
//    .exec((err, users) => {
//      if (err) {
//        next(err);
//        return;
//        }
//
//     Request
//       .findOne({_id: bookingId})
//       .populate("owner")
//       .populate("petcaretaker")
//       .populate("pet")
//       .exec((err, booking) => {
//         if (err) {
//           next(err);
//           return;
//         }
//         console.log(booking);
//         console.log(bookingId);
//     res.render('booking/bookinginfo', { users, booking });
//   });
//     });
//   });
// });
//


router.post('/:bookingId', (req, res, next) => {

  let bookingId = req.params.bookingId;

  let bookingToUpdate = {
    acceptedByHelper: req.body.accepted,
    declinedByHelper: req.body.declined

  }

  Booking.findByIdAndUpdate(bookingId, bookingToUpdate, (err, booking)=>{
    if (err) {
      console.log("GOT AN ERROR");
      next(err)
    } else {
      console.log("GOT UPDATED");
      res.json(booking);
    }
  })
});


module.exports = router;
