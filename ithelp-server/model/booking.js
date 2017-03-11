const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookingSchema = new Schema({
  date: Date,
  starttime: String,
  hours: Number,
  mainSubject: String,
  subSubject: String,
  issue: String,
  message: String,
  accepted: Boolean,
  declined: Boolean,
  price: Number,
  helper: { type: Schema.Types.ObjectId, ref: 'User' },
  customer: { type: Schema.Types.ObjectId, ref: 'User' }

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});



const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
