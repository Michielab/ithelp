var express           = require('express');
var mongoose          = require('mongoose');
const passport       = require("passport");

var router            = express.Router();
const Booking         = require("../model/booking");
const User            = require("../model/user");
const Review          =  require("../model/review");




//
// router.get('/reviews/:requestId', auth.checkLoggedIn('You must be login', '/login'), (req, res, next) => {
//   let requestId = req.params.requestId;
//   Request.findById(requestId, (err, booking) => {
//     if (err) {  next(err); }
//     Request
//       .findOne({_id: requestId})
//       .populate("petcaretaker")
//       .exec((err, booking) => {
//         if (err) {
//           next(err);
//           return;
//           }
//     res.render('booking/review', { booking });
//
//   });
// });
//
// });
router.get('/:id', (req, res, next) => {
  User
  .findOne({_id: req.params.id})
  .populate("reviews")
  .exec((err, users) => {
    if (err) {
      next(err);
      return;
    }

    Review
    .find({customer: req.params.id})
    .populate("helper")
    .populate("customer")
    .exec((err, reviewCustomer) => {
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


        res.json({reviewHelper,reviewCustomer, users});

      });
    });
  });
})


router.post('/', (req, res, next) => {
  console.log(req)
  var  rating = req.body.rating;
  var	 evaluation = req.body.evaluation;
  var	 subject = req.body.subject;
  var  customer = req.body.customer;
  var  helper = req.body.helper;
  var  booking = req.body.booking;

  var newReview = Review({
    rating,
    evaluation,
    subject,
    booking,
    customer,
    helper
  });

  console.log(newReview)
  newReview.save((err, review) => {
    if (err) {
      req.flash('error', 'Unable to save');
      res.render("auth/signup", {
        message: req.flash('error')
      });
    } else { User.findByIdAndUpdate({_id: customer},{$push: { reviews: review.id }}, (err) => {
      if (err) {
        console.log("GOT AN ERROR");
        next(err);
      } else {  User.findByIdAndUpdate({_id: helper},{$push: { reviews: review.id,}}, (err) => {
        if (err) {
          console.log("GOT AN ERROR");
          next(err);
        } else {  Booking.findByIdAndUpdate({_id: booking},{$push: { reviews: review.id,}}, (err) => {
          if (err) {
            console.log("GOT AN booking eror");
            next(err);
          }
        else {
          User
          .findOne({_id: req.body.customer})
          .populate("bookings")
          .exec((err, users) => {
            if (err) {
              next(err);
              return;
            }

            Booking
            .find({customer: req.body.customer})
            .populate("helper")
            .exec((err, booking) => {
              if (err) {
                next(err);
                return;
              }

              Review
              .findOne({_id: review.id})
              .populate("customer")
              .populate("helper")
              .exec((err, review) => {
                if (err) {
                  next(err);
                  return;
                }
                res.json(review);
                // res.render('dashboard/profile', {review, booking, users});
              });
            });
          })
          ;}
        });
      }
          });
        }
    });
  }
});

});



module.exports = router;
