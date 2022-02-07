const mongoose = require('mongoose');

const connectToDatabase = ()=>{
     mongoose.connect(process.env.DATABASE_URL).then(con => {
         console.log(`Database connected with HOST ${con.connection.host}`);
     })
}
module.exports = connectToDatabase;