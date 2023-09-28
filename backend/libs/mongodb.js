const mongoose = require('mongoose');

//___
let isConnected = false;

/*
___1. why async / await ? ==> is called in route.js in async function
*/
const connectMongoDB = async () => {
    if (isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        /*
    {
      useNewUrlParses: true,
    useUnifiedTopology: true}
    */
        isConnected = true;

        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(`connection to MongoDB failed: ${error}`);
        //throw new Error("connection to MongoDB failed")
    }
};

export default connectMongoDB;
