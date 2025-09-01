const mongoose = require("mongoose");
const bcrypt=require("bcrypt");

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
    },
    username: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});
// for making hash password
personSchema.pre('save',async function (next){
    const person=this;
    if(!person.isModified('password'))return next();
    try {
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(person.password,salt);
        person.password=hashPassword;
        next();
    } catch (err) {
        return next(err);
    }
})
personSchema.methods.comparePassword=async function(condidatePassword)
{
    try {
        const isMatch=await bcrypt.compare(condidatePassword,this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
// Create model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
