const mongoose = require('mongoose');
/* NOTE this is our db connection string */
require('dotenv').config();
const connectionStr = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopifybackend';

// const connectionStr = process.env.MONGODB_URI

// mongoose.connect(connectionStr, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
// });

mongoose.connect(connectionStr);

mongoose.connection.on('connected', () => {
    console.log('\x1b[36m%s\x1b[0m', `[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`)
});

mongoose.connection.on('error', (error) => {
    console.log('\x1b[31m%s\x1b[0m', 'MongoDB connection error 😥', error) // red
})

mongoose.connection.on('disconnected', () => {
    console.log('\x1b[33m%s\x1b[0m', 'MongoDB disconnected  ⚡️ 🔌 ⚡️');
});