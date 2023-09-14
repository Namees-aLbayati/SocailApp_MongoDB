const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/your-database-name'; // Replace with your MongoDB URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// You can add additional options and configurations here.
module.exports=mongoose.connection