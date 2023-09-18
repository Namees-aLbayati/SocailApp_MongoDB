const router=require('express').Router();
const User=require('../models/User');

router.post('/user/login',async(req,res)=>{
    console.log('req post',req.body)
let creat=User.create(req.body)
    res.status(200)
})

module.exports=router;