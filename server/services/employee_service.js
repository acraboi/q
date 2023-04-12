const EmployeeModel = require('../models/employee_model');

class EmployeeService{
    static async Create(email, password){
        try{
       const user = new EmployeeModel({email, password});
       return await user.save();
        }
        catch(error){
            throw error;
        }
    }

    static async Read(){
       const read = await EmployeeModel.find();
       return read;
    }

    static async CheckUser(email){
        return await EmployeeModel.findOne({email});
    }

    static async Update(_id, email){
        const user = await EmployeeModel.updateOne({_id,email});
        return user;

    }

    
}

module.exports = EmployeeService;