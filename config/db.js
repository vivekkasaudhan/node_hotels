const mongoose = require("mongoose");
const mongoUrl = 'mongodb://localhost:27017/hotels';

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
