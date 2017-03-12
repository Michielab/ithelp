var express = require('express');
var router = express.Router();
const User = require('../model/user');
const Booking = require('../model/booking');
const mongoose = require('mongoose');
const upload = require('../config/multer');


// router.get('/users/book'), function(req, res, next) {
//   res.render('booking/booktaker');
// });

router.post('/', (req, res, next) => {
  var  date = req.body.date;
  var  starttime = req.body.starttime;
  var  mainSubject = req.body.mainSubject;
  var  subSubject = req.body.subSubject;
  var  issue = req.body.issue;
  var  message = req.body.message;
  var  customer = req.body.customer;
  var  helper = req.body.helper;
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
  });
console.log(newBooking);
  newBooking.save((err, booking) => {
    if (err) {
      req.flash('error', 'Unable to save');
      res.render("auth/signup", {
        message: req.flash('error')
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

router.get('/inbox'), (req, res, next) => {
  console.log(req)
       User
      .findOne({_id: req.user._id})
      .populate("bookings")
      .exec((err, users) => {
        if (err) {
          next(err);
          return;
          }

          Booking
          .find({customer: req.user._id})
          .populate("helper")
          .populate("customer")
          .exec((err, booking) => {
            if (err) {
              next(err);
              return;
            }

            Booking
            .find({helper: req.user._id})
            .populate("helper")
            .populate("customer")
            .exec((err, helper) => {
              if (err) {
                next(err);
                return;
              }


              console.log(bookingtaker);
              console.log(review);
            res.json(users, booking,helper);
          });
      });
    });
}
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
//
//
// router.post('/bookingconfirm/:bookingId', (req, res, next) => {
//
//   let bookingId = req.params.bookingId;
//   console.log("testeeeeee");
//   console.log(bookingId);
//   console.log("testeeeeee");
//
//   let bookingToUpdate = {
//     accepted: req.body.confirm
//
//   }
//
//   Request.findByIdAndUpdate(bookingId, bookingToUpdate, (err, booking)=>{
//     if (err) {
//       console.log("GOT AN ERROR");
//       next(err)
//     } else {
//       console.log(booking);
//       console.log("GOT UPDATED");
//       res.redirect('/profile');
//     }
//   })
// });
//


module.exports = router;
