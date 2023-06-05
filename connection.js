const mysql=require("mysql2")

let connection=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"password123",
    database:"employee_db"
});

connection.connect(function(){
    console.log("you are connected")
})
module.exports=connection