const dotenv = require('dotenv');
dotenv.config();

var app = require('./app');
var port = process.env.PORT;
var server = app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})