const mongoose = require('mongoose');

const connectMongoDB = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log(`connection to MongoDB failed: ${error}`);
  }
};

export default connectMongoDB;
