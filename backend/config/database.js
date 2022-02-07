const mongoose = require('mongoose');

const connectToDatabase = ()=>{
     mongoose.connect('mongodb://localhost:27017/strc').then(con => {
         console.log(`Database connected with HOST ${con.connection.host}`);
     })
}
module.exports = connectToDatabase;