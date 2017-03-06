const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bookingSchema = new Schema({
  date: Date,
  time: String,
  subject: String,
  comment: String,
  accepted: Boolean,
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
