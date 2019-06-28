//set up the code to connect Node to MySQL

var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:"localhost",
        port:3306,
        user: "root",
        password:"Carl_051",
        database: "burgers_db"
    });
};

//Making connection ...

//Important to export always (if you neeed to use it in other file);

//This line just to test that this is working
connection.query("SELECT * FROM burgers", function(err, res){
    console.table(res);
});

module.exports = connection;