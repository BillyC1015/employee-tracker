const inquirer=require("inquirer")
const connection=require("./connection")


function startApp() {
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Update employee role",
          "Exit"
        ]
      }])
      .then(response => {
        switch (response.action) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add a new department":
            addDepartment();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          case "Update employee role":
            updateEmpRole();
            break;
          case "exit":
            connection.end();
            break;
        }
      });
  };

// functions for view queries 
function viewDepartments(){
    connection.query("select * from department",(err,res)=>{
        if(err) throw err;
        console.table(res)
        startApp()
    })
}

function viewRoles(){
    connection.query("select * from role",(err,res)=>{
        if(err) throw err;
        console.table(res)
        startApp()
    })
}

function viewEmployees(){
    connection.query("select * from employee",(err,res)=>{
        if(err) throw err;
        console.table(res)
        startApp()
    })
}
  startApp()