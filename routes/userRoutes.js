require('dotenv').config()
const router=require('express').Router();
const session = require('express-session');

router.use(session({
    secret:process.env.secKey, // Change this to a strong, random value
    resave: false,
    saveUninitialized: true,
  }));

const User=require('../models/User');
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser');
const {setCookies} = require('../helpers/setCookies');
router.use(cookieParser());


router.post('/signup',async(req,res)=>{
let creat=User.findOne(req.body)
    res.status(200)
})



router.post('/login',setCookies,(req,res)=>{


    User.findOne({userName:req.body.userName,password:req.body.password})
.exec().then((result)=>{

    if(result===null){
        return res.status(403).json({
            messege:'Invalid Username or Password'
        }) 
    
    }

    const data={
        email:result.email,
        password:result.password,
        isadmin:result.isAdmin
    }

    console.log('000000')
     res.status(200).json({messege:'ok',isAdmin:result.isAdmin})



})


})






module.exports=router;