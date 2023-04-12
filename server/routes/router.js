//This is used for API
//import Router function
const router = require('express').Router();

const UserController = require ('../controllers/user_controller');
const DriverController = require ('../controllers/driver_controller');
const EmployeeController = require('../controllers/employee_controller');
//USER CONTROLLER
 router.post('/admin/create', UserController.Create);
 router.post('/admin/login', UserController.login);
 router.get('/admin/view', UserController.List);
 router.get('admin/find', UserController.FindOne);
 router.put('/admin/update', UserController.Update);
 //DRIVER CONTROLLER
 router.post('/driver/create', DriverController.Create);
 router.put('/driver/update', DriverController.Update);
 router.get('/driver/list', DriverController.Read);
//EMPLOYEE CONTROLLER
 router.post('/employee/create', EmployeeController.Create);
 router.get('/employee/list',EmployeeController.Read);
router.post('/employee/login', EmployeeController.login);
router.get('/employee/findOne', EmployeeController.FindOne);
router.put('/employee/update', EmployeeController.Update);
 module.exports = router;

