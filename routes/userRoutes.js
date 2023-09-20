require('dotenv').config()
const router=require('express').Router();
const User=require('../models/User');
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser');
const setCookies = require('../helpers/setCookies');
router.use(cookieParser());


router.post('/signup',async(req,res)=>{
    console.log('signup',req.body)
let creat=User.findOne(req.body)
    res.status(200)
})



router.post('/login',setCookies,(req,res)=>{

 User.findOne({userName:req.body.userName,password:req.body.password})
.exec().then((result)=>{

    if(result==null){
        return res.status(403).json({
            messege:'Invalid Username or Password'
        }) 
    
    }

    const data={
        email:result.email,
        password:result.password,
        isadmin:result.isAdmin
    }
        res.status(200).json({messege:'ok',isAdmin:result.isAdmin})

    









})



})






module.exports=router;