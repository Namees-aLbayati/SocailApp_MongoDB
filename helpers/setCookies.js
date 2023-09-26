require('dotenv').config()
const jwt = require('jsonwebtoken');
const User=require('../models/User')
const setCookies = async (req, res, next) => {
    User.findOne({userName:req.body.userName,password:req.body.password})
    .exec().then((result)=>{
        if(result==null){
            return res.status(403).json({
                messege:'Invalid Username or Password'
            }) 
        
        }
        if(result.isAdmin==false){

            try {
                const token =  jwt.sign(req.body, process.env.secKey, { expiresIn: '3h' });
                
                const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
                
                res.cookie('tokenUser', token, { maxAge: thirtyDaysInSeconds}); // Set the cookie using res.cookie()

             console.log('Cookies have been set up for user');
                
               next();  
              } catch (error) {
                console.error('Error setting cookies for users:', error);
            //    next(error); 
              }
              

        }else{
            const token =  jwt.sign(req.body, process.env.secKey, { expiresIn: '3h' });
                
            const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
            
            res.cookie('tokenAdmin', token, { maxAge: thirtyDaysInSeconds}); // Set the cookie using res.cookie()

           console.log('Cookies have been set up for admin');
            
          next();  

        }
    

    })

};

function verifyToken(req, res, next) {

   const token = req.cookies;

  console.log('check token',token.tokenAdmin,token.tokenUser)

     if (token.tokenAdmin) {
        jwt.verify(req.cookies.tokenAdmin, process.env.secKey, (err, decoded) => {
            if (err) {
              return res.status(401).json({ message: 'Authentication failed: Invalid token' });
            }
        
            // Token is valid, store the decoded data in req.user
            req.user = 'admin';
            next()
          });

    }if(token.tokenUser){
jwt.verify(req.cookies.tokenUser,process.env.secKey,(err,decode)=>{
    if(err){
        return res.status(401).json({ message: 'Authentication failed: Invalid token' });

    }
    req.user='user'
    next()
})

    }
  
  
    

  }



  function preventLoggedInUsers(req, res, next) {
    console.log('preventing middleware',req.cookies)
let token=req.cookies;
if(token.tokenAdmin){
    req.user='admin'
    next()

}if(token.tokenUser){
    req.user='user'
    next()

}
    // Check if the user is logged in based on your authentication logic
  }


module.exports = {setCookies,verifyToken,preventLoggedInUsers};



