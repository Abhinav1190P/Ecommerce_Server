const mongoose = require('mongoose')

const connectDB = async() => {
await mongoose.connect('mongodb+srv://AbhinavPandey:AbhinavKaEcomm@cluster0.immox.mongodb.net/?retryWrites=true&w=majority');

    console.log("Mongodb connected")
};

module.exports = connectDB;