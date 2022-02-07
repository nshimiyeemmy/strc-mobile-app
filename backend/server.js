const app = require('./app');
const connectToDatabase = require('./config/database');

require('dotenv').config({ path: './config/config.env' });

//Handling the Uncaught exceptions on the server
process.on('uncaughtException', (err) => {
  console.log(`ERROR:${err.message}`);
  console.log('Shutting down due to uncaught Exceptions');
  process.exit(1);
});

//connecting to mongoDB database
connectToDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

//Handling unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log('Shutting down the server due to UnHandled promise rejection');
  server.close(() => {
    process.exit(1);
  });
});