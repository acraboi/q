const { create } = require('../models/user_model');
const UserModel = require('../models/user_model')
const jwt = require('jsonwebtoken');

class UserServices{
    static async Create(email, password){
        try {
            const createUser = new UserModel({email, password});
            return await createUser.save();
        }catch(err)
        {
            throw err;
        }
    }
    //READ
    static async findOne(adminId){
        try{

            const success =  await UserModel.findOne(adminId);

            if(!success){
                console.log('User Dont Exist');
            }
                console.log('-----User Exist-----');
                return success;
            
        }catch(error){
            throw error;
        }
    }
    //UPDATE
    static async Update(_id, email){
        try
        {
           const user =  await UserModel.updateOne({_id, email});
            return user;
        }
        catch(error)
        {
            throw error;
        }

        
    }


    static async checkUser(email){
        try{    
            return await UserModel.findOne({email});
        }catch (error){
            throw error; 
        }
    }

    static async generateToken(tokenData, secretKey, jwt_expire){
        return jwt.sign(tokenData, secretKey,{expiresIn:jwt_expire});
    }   
}

module.exports = UserServices;