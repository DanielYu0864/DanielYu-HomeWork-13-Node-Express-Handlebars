CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    -- SET devoured defalut false
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);