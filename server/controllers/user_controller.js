const UserModel = require('../models/user_model');
const UserService = require('../services/user_services')

//CREATE
exports.Create = async(req,res,next)=>{
    try{
        const {email, password} =  req.body;
        const successRes  = await UserService.Create(email,password);
        res.json({status:true, success:"User Registered Successfully"});
        console.log('Admin Successfully Registered..................>')
        return successRes;

    }catch(error){
        res.json({status:true, success:"Error"});
        throw error;
    }
}
//READ
exports.List = async(req,res, next)=>{
  
    UserModel.find()
    .then(response => {
      res.json({
        response
      })
    })
    .catch(error => {
      res.json({
        message: 'An Error Occured'
      })
    })
}


//READ
exports.FindOne = async (req,res,next)=>{
  try{
  let adminId = UserModel._id;
  adminId = req.body;

 await UserService.findOne(adminId)
    .then(response => {
      res.json({
        response
      })
    })  
    .catch(error =>{
      res.json({
        message: 'an error occured'
      })
    })
  }
  catch(error){
    throw error;
  }

}

//UPDATE

exports.Update = async(req,res,next)=>{
  try
    {
      
      const { _id, email } = req.body;
      await UserService.Update(_id, email)
      .then(response =>{
        res.json({
          response
        })
      })
      .catch(error =>{
        res.json({
          message: "An Error Occured"
        })
      })
    }
  catch(error)
    {
      throw error;
    }
}
exports.login = async(req,res,next)=>{
    try{
        const {email, password} =  req.body;
       const user = await UserService.checkUser(email);
       //check if user'email' exist in database
        console.log('------------email----------', user);   
       if(!user){
        throw new Error('User dont exist');
       }

       //compare password of user1
       const isMatch = await user.comparePassword(password);

       if (isMatch === false){
        throw new Error('Password Mismatch');
       }else{
        console.log('-----Password Match: True')
       }

       let tokenData = {_id:user._id,email:user.email};

       const token = await UserService.generateToken(tokenData, 'secretKey', '1h');

       res.status(200).json({status:true,token:token})


    }catch(error){
        throw error;
    }
    
    
}