const mongoose = require('mongoose');
const db = require('../config/db');
const bycrpt = require('bcrypt');

//initialize a schema for db
const { Schema } = mongoose;


//constructor of Schema
const userSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }

}, {timestamps: true});

userSchema.pre('save', async function(){
    try{
        var user = this;
        const salt = await(bycrpt.genSalt(10));
        const hashpass = await bycrpt.hash(user.password,salt);
        user.password = hashpass;
        return user.password;
    }catch(error){
    }
});


userSchema.methods.comparePassword = async function(userPassword){
    try{
        const isMatch = await bycrpt.compare(userPassword, this.password);
        return isMatch;
    }catch (error){
        throw error;
    }
}
//initialize a model and pass the userSchema constrcutor
const UserModel = db.model('users', userSchema);    
module.exports = UserModel;
 