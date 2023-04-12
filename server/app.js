const express = require('express');
const body_parser = require('body-parser');
const router = require('./routes/router')
const cors = require('cors');





    app = express();
    //To open the connection to the fetch on client side(Unblocking)
    app.use(cors());
    app.use(body_parser.json());
    app.use('/' ,router);

    

module.exports = app;