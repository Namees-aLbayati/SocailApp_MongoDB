const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
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
   /* const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const a= emailRegex.test(this.email)
 
    if (a!==true){
      return next(new Error('Invalid email format'));

    }*/
    next()
  
  });

const User = mongoose.model('User', userSchema);
 const seed=async()=>{
  await User.deleteMany({})
let leng= await User.find({})
if(leng.length==0){
  let a=await User.insertMany([{userName:'namees',email:'test@test.com',password:'0000'},{userName:'admin',email:'admin@admin.com',password:'admin',isAdmin:true}]);
console.log('seeded')
}else{
  const seeded=await User.find({})
  console.log('seeded already',seeded)
}
 }

 seed()

module.exports = User;
