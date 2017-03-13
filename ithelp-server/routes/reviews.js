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
  console.log(req.params.id)
       User
      .findOne({_id: req.params.id})
      .populate("bookings")
      .exec((err, users) => {
        if (err) {
          next(err);
          return;
          }

          Review
          .find({customer: req.params.id})
          .populate("helper")
          .populate("customer")
          .exec((err, bookingCustomer) => {
            if (err) {
              next(err);
              return;
            }

            Review
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



  router.post('/', (req, res, next) => {
    var  rating = req.body.rating;
    var	 evaluation = req.body.evaluation;
    var	 subject = req.body.subject;
    var  customer = req.user.customer;
    var  helper = req.body.helper;
    var  booking = req.body.bookingId;

      var newReview = Rating({
        rating,
        evaluation,
        subject,
        booking,
        customer,
        helper
      });

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
                            } else {
                              User
                                .findOne({_id: req.user.id})
                                .populate("bookings")
                                .exec((err, users) => {
                                  if (err) {
                                    next(err);
                                    return;
                                  }

                                  Booking
                                    .find({customer: req.user.id})
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

});



module.exports = router;
