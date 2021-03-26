const User = require("../models/user");
const jwt = require("jsonwebtoken");

// handle errors
const handleErrors = (err) => {
  let errors = { email: '', username: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate error
  if (err.code === 11000) {
    // duplicate username
    if(err.keyValue.username)
      errors.username = 'that username is already registered';
    // duplicate email
    else
      errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

//the secret key must be moved from here
const secretKey = 'net ninja secret';

// age of tokens and cookies
//       d   h    m    s
maxAge = 3 * 24 * 60 * 60;

//create a token using jwt
function createToken(id) {
  return jwt.sign({ id }, secretKey, {
    expiresIn: maxAge
  });
};

module.exports.signup = async (req,res,next)=>{
  const {email, username, password} = req.body;
  try{
    const user = await User.create({email, username, password});
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  }
  catch (err){
    console.log(err);
    let errors = handleErrors(err);
    res.status(400).json({errors});
  }
}

module.exports.login = async (req,res,next)=>{
  const {email, password, username} = req.body;
  try {
    const user = await User.login(email, username, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
}