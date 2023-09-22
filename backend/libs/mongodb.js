const mongoose = require('mongoose');

/*
___1. why async / await ? ==> is called in route.js in async function
*/
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log(`connection to MongoDB failed: ${error}`);
    //throw new Error("connection to MongoDB failed")
  }
};

export default connectMongoDB;
