const employeeModel = require('../models/employee_model');
const EmployeeService = require('../services/employee_service')

exports.Create = async(req,res)=>{
try{
    const {email, password} = req.body;
    const user = await EmployeeService.Create(email,password);
    res.json({status:true, success: 'Employee Successfully Added'})
    return user;
    }
    catch(error){
        res.json({status:false, success:"Fail"})
    }
}
exports.login = async(req,res,next)=>{
    try{
        const {email, password} = req.body;
        const user = await EmployeeService.CheckUser(email);

        if(!user){
            console.log('No account found!')
        }
        const isMatch = await user.comparePassword(password);

        if(isMatch === false){
            throw new Error('Password Mismatch');

        }else{
            console.log('P A S S W O R D : TRUE')
        }

    }catch(error)
    {
        throw error;
    }
}

exports.Read = async(req,res)=>{
    employeeModel.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>({
        message:'An error Occurrred'
    }))
}

exports.Update = async (req,res,next)=>{
    try{
        const {_id, email} = req.body;
        await EmployeeService.Update(_id, email)
        .then(response=>{
            res.json({
                response
            })
        })
        .catch(error=>{
            res.json({
                message: 'No Account Found'
            })
        })
    
    }
    catch(error){
        throw error;
    }
}

exports.FindOne = async(req,res,next)=>{
    const{email} = req.body;
    EmployeeService.CheckUser(email)
    .then(response=>{
        res.json({
          
            message: 'Employee Account Exist',
            response
        })

    })
    .catch(error=>{
        res.json({
            message: 'No Account Found'
        })
    })
}


