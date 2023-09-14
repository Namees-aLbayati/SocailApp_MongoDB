const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    min:2
  },
  password:{type:String},
isAdmin:{type:Boolean,default:false}

},
  {
    toJSON:{
        virtuals:true
    }
  }
);

// Define a pre-save hook to validate and manipulate the email
userSchema.pre('save', async function (next) {
    console.log('pre save',this.email)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const a= emailRegex.test(this.email)
 
    if (a!==true){
      return next(new Error('Invalid email format'));

    }
    next()
  
  });

const User = mongoose.model('User', userSchema);


module.exports = User;
