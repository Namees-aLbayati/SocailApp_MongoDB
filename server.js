const express=require('express');
const app=express();
const PORT=process.env.PORT||3001;
const path=require('path')
const jwt=require('jsonwebtoken')
require('dotenv').config();
const {verifyToken,preventLoggedInUsers}=require('./helpers/setCookies')

const cookieParser = require('cookie-parser');
 const signupRou=require('./routes/signupRoute')
const Userroutes=require('./routes/userRoutes')
const db=require('./config/connection')
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const {checkEmail,checkPass}=require('./helpers/helperFun')
app.use(express.urlencoded({extends:true}))
app.use(express.json())
app.use(express.static('public'))
app.use(signupRou)
app.use(cookieParser())
app.use('/api',Userroutes)
const livereloadServer = livereload.createServer();
livereloadServer.watch(__dirname + '/public'); // Adjust this path to your static files directory

const session = require('express-session');

app.use(session({
    secret:process.env.secKey, // Change this to a strong, random value
    resave: false,
    saveUninitialized: true,
  }));


// Connect Livereload to your Express.js app
app.use(connectLivereload());
 


app.get('/', preventLoggedInUsers,(req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(filePath);
  });

app.get('/login',preventLoggedInUsers,(req,res)=>{
    
   res.sendFile(path.join(__dirname,'public/embaded/login.html'))
})

app.get('/user/dashboard',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'public/embaded/welcome.html'))
 })
 
 app.get('/admin/dashboard',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'public/embaded/admin.html'))
 })

 
 app.get('/signup',preventLoggedInUsers,(req,res)=>{
    
    res.sendFile(path.join(__dirname,'public/embaded/signup.html'))
 })




 app.get('/signout', verifyToken, (req, res) => {

    console.log('signout',req.user)
    const token=req.user;
    if(token=='admin'){
     res.clearCookie('tokenAdmin');
  res.redirect('/');
  console.log('signed out admin')
 
    }else{
      res.clearCookie('tokenUser');
  res.redirect('/');
  console.log('signed out user')

    }
  

});


db.once('open', () => {
    app.listen(PORT,()=>{
        console.log('connected to 3001')
    });
  });


