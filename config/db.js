const mongoose = require("mongoose");
require('dotenv').config();
// const mongoUrl =process.env.mongoLocalUrl;
const mongoUrl=process.env.DB_URL; 

// Connect to MongoDB
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Event listeners
db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

module.exports = db;
