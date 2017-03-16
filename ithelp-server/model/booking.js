const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookingSchema = new Schema({
  date: Date,
  starttime: String,
  hours: {
    type: Number, default: 0
  },
  mainSubject: String,
  subSubject: String,
  issue: String,
  reply: String,
  message: String,
  acceptedByCustomer: Boolean,
  declinedByCustomer: Boolean,
  acceptedByHelper: Boolean,
  declinedByHelper: Boolean,
  price: Number,
  helper: { type: Schema.Types.ObjectId, ref: 'User' },
  customer: { type: Schema.Types.ObjectId, ref: 'User' },
  review: { type: Schema.Types.ObjectId, ref: 'Review' }

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});



const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
