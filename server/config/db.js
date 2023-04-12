//import moongose library
const mongoose = require('mongoose');


//create conenection to mongodb compass
const connection = mongoose.createConnection('mongodb://localhost:27017/Travelwise').on('open',()=>{
    console.log('----------Database is connected Successfully-------------');
}).on('error',()=>{
    console.log('Not Connected');
});

//make connection global function
module.exports = connection;


// mongodb://localhost:27017