const express=require('express');
const app=express();
const PORT=process.env.PORT||3001;
const path=require('path')
const Userroutes=require('./routes/userRoutes')
const db=require('./config/connection')
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const {checkEmail,checkPass}=require('./helpers/helperFun')
app.use(express.urlencoded({extends:true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/api',Userroutes)
const livereloadServer = livereload.createServer();
livereloadServer.watch(__dirname + '/public'); // Adjust this path to your static files directory

// Connect Livereload to your Express.js app
app.use(connectLivereload());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'./public/index.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/embaded/login.html'))
})



db.once('open', () => {
    console.log('Connected to MongoDB database');
    app.listen(PORT,()=>{
        console.log('connected to 3001')
    });
  });

