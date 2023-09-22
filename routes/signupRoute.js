const route=require('express').Router();
const User=require('../models/User')
route.post('/signup',async(req,res)=>{
    console.log('signup',req.body)
await User.create(req.body).then((data)=>{
    console.log('data',data)
    if(!data){
        res.status(404).json({messege:'unable to create the account'});

    }
res.status(200).json({data:data})


})
})
module.exports=route