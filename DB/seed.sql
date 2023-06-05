USE employee_db;

INSERT INTO department(name)
VALUES("engineering"),("sales"),("editing");

INSERT INTO role(title,salary,department_id)
VALUES("engineer",1234,1),("sales rep",4321,2),("editor",5678,3);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("John","Smith",1,null),("Jane","Doe",2,1),("Tony","Thetiger",3,1);