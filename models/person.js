const mongoose = require("mongoose");

// Define schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  // corrected
    },
    work: {
        type: String,
        required: true,  // corrected
    },
    email: {
        type: String,
        required: true,  // corrected
    }
});

// Create model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
