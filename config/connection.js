//set up the code to connect Node to MySQL

var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: "root",
    password:"Carl_051",
    database: "burger_db"
});

//Making connection ...

connection.connect(function(err){
    if(err){
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("Yep, connected as id " + connection.threadId);
});

//Important to export always (if you neeed to use it in other file);

module.exports = connection;