const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
  profilePic: {
    type: String, default: '/icons/profiletest1.jpg'
  },
  address: String,
  location: { type: { type: String }, coordinates: [Number] },
  phoneNumber: Number,
  role: {
     type: String,
     enum : ['CUSTOMER', 'HELPER', 'BOTH'],
     default : 'CUSTOMER'
   },
  speciality: Array,
  description: String,
  slogan: String,
  price: {
    type: Number, default: 14
  },
  status: String,
  Totalscore: Number,
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
