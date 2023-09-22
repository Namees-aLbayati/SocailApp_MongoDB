require('dotenv').config()
const jwt = require('jsonwebtoken');

const setCookies = async (req, res, next) => {
  try {
    const token = await jwt.sign(req.body, process.env.secKey, { expiresIn: '3h' });
    
    const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
    
    res.cookie('token', token, { maxAge: thirtyDaysInSeconds}); // Set the cookie using res.cookie()
    
    console.log('Cookies have been set up');
    
    next();  
  } catch (error) {
    console.error('Error setting cookies:', error);
    next(error); 
  }
};



module.exports = setCookies;



module.exports=setCookies
