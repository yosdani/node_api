/**
 * Created by tabares on 8/2/2021.
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();
var env = require('node-env-file'); // .env file
env(__dirname + '/.env');
var corsOptions = {

    //    origin: "http://localhost:8081"
    'Access-control-Allow-Origin':'*',
    'Access-control-Allow-Credentials':true

};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database


// db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });




// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

