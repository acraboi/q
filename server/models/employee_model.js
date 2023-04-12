const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const employeeSchema = new Schema(
    {
        email:
        {
            type: String,
            lowercase: true,
            required: true,
            unique: true
        },
        password:
        {
            type: String,
            required: true
        }
    }, {timestamps: true});


    employeeSchema.pre('save', async function(){
        try{
            var user = this;
            const salt = await(bcrypt.genSalt(10));
            const hashpass = await bcrypt.hash(user.password,salt);
            user.password = hashpass;

        }catch(error){
        }
    });


    employeeSchema.methods.comparePassword = async function(userPassword){
        try{
            const isMatch = await bcrypt.compare(userPassword, this.password);
            return isMatch;
        }catch(error){
            throw error;
        }
    }
    
const employeeModel = db.model('Employee', employeeSchema);
module.exports = employeeModel;