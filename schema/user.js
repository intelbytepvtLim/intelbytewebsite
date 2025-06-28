const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  Ph_Number: {
    type: Number,
  },
  state: {
    type: String,
    required: true,
  },
 
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);