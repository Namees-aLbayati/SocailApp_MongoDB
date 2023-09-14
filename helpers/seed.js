const connection=require('../config/connection');
const User=require('../models/User')
const userData=
    {
        firstName:'namees',
        lastName:'mohammed',
        email:'n@n.com',
        password:'0',
        isAdmin:true

    };
function  seedData(){

    connection.once('open',async()=>{
        console.log('connected',userData)
      await  User.deleteMany({})
     await User.create(userData);
let b=await User.find({})
console.log('find all',b)
    })
}

seedData()