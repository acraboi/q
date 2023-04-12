const DriverService = require('../services/driver_services');
const mongoose = require('mongoose');
const DriverModel = require('../models/driver_model');
const UserModel = require('../models/user_model');


exports.Create = async(req,res,next)=>{
    try{
        const{firstName, lastName, middleName, 
            plateNum, vehicleColor, address, contactNum,
            vehicleType,stickId} = req.body;
        const successRes = await DriverService.Create(firstName, lastName, middleName, 
            plateNum, vehicleColor, address, contactNum,
            vehicleType,stickId);
            res.json({status:true, success:"Driver has been Registered!"});
    }catch(error){
        throw error;
    }
}

exports.Read = async(req, res, next)=>{
    await DriverService.Read()
     .then(response => {
         res.json({
             response
         })
     })
     .catch(error =>{
         res.json({
             error:true
         })
     })
 
 }

exports.Update = async(req,res,next)=>{

    const { firstName, lastName, middleName,
        plateNum, vehicleColor, address, contactNum,
        vehicleType,stickId } = req.body;
    const updateData = { firstName, lastName, middleName,
        plateNum, vehicleColor, address, contactNum,
        vehicleType,stickId };
    
    const result = await DriverService.updateDriver(firstName, updateData);
    if(!result){
        res.json({
            message: 'Users Dont Exist'
        })
    }
    res.json({status:true, success: 'User Has been Updated',response: result})
}

