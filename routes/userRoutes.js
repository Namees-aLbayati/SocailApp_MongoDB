require('dotenv').config()
const router=require('express').Router();
const User=require('../models/User');
const jwt=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
router.use(cookieParser());



router.post('/signup',async(req,res)=>{
    console.log('signup',req.body)
let creat=User.findOne(req.body)
    res.status(200)
})


router.post('/login',async(req,res)=>{
await User.findOne({userName:req.body.userName,password:req.body.password})
.exec().then((result)=>{

    if(result==null){
        return res.status(403).json({
            messege:'Invalid Username or Password'
        }) 
    
    }

const data={
    email:result.email,
    password:result.password
}

    const token = jwt.sign(data, process.env.secKey, { expiresIn: '3h' });

    const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
    

    res.cookie('token', token, { maxAge: thirtyDaysInSeconds * 1000 }); // Convert seconds to milliseconds

    console.log('token level reached',req.cookies.token)

    res.json({messege:'ok'})
})



})






module.exports=router;