const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  profilePic: String,
  address: String,
  // location: { type: { type: String }, coordinates: [Number] },
  phoneNumber: String,
  role: {
     type: String,
     enum : ['CUSTOMER', 'HELPER', 'BOTH'],
     default : 'CUSTOMER'
   },
  speciality: String,
  description: String,
  slogan: String,
  price: String,
  status: String,
  score: String,
  responseTime: String,
  bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]

}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

userSchema.index({ location: '2dsphere' });


const User = mongoose.model("User", userSchema);
module.exports = User;
