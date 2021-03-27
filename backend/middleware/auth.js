const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
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