const jwt = require('jsonwebtoken');

//the secret key must be moved from here
const secretKey = 'net ninja secret';

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
        res.redirect('auth/login');
      } else {
        next();
      }
    });
  } else {
    res.redirect('auth/login');
  }
};

module.exports = { requireAuth };