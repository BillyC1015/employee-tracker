DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT primary key,
    name VARCHAR(25) NOT NULL
);

CREATE TABLE role(
    id INT AUTO_INCREMENT primary key,
    title VARCHAR(25) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT primary key,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    role_id INT,
    FOREIGN KEY(role_id) REFERENCES role(id),
    manager_id INT
);