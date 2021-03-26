const mongoose = require("mongoose");
const { isEmail, isStrongPassword } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email:{
    type: String,
    required: [true, "Please enter a email"],
    validate: [isEmail, "Please enter a valid email"],
    unique: true,
    lowercase: true,
  },
  username:{
    type: String,
    required: [true, "Please enter a username"],
    minLength: [3, "Minimum username length is 3 characters"],
    unique: true,
  },
  password:{
    type: String,
    required: [true, "Please enter a password"],
    minLength: [6, "Minimum password length is 6 characters"],
  }
});

// db schema hook to encrypt passwords before saving them 
userSchema.pre("save",async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// static method to login user with email
userSchema.statics.loginWithMail = async function(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

// static method to login user with username
userSchema.statics.loginWithUsername = async function(username, password) {
  const user = await this.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect username');
};

module.exports = mongoose.model("user",userSchema);
