const DriverModel = require('../models/driver_model');
const { create, update } = require('../models/driver_model');



class DriverService{
    static async Create(firstName, lastName, middleName, 
        plateNum, vehicleColor, address, contactNum,
        vehicleType,stickId){
        try {
            const createUser = new DriverModel({firstName, lastName, middleName, 
                plateNum, vehicleColor, address, contactNum,
                vehicleType,stickId});
            return await createUser.save();
        }catch(err)
        {
            throw err;
        }
    }

    static async Read(){
        const result = await DriverModel.find();
         return result;
                
    }

    static async updateDriver(firstName, updateData) {
        
        try {
            const result = await DriverModel.findOneAndUpdate({firstName}, updateData, {new:true});
            return result;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = DriverService;;