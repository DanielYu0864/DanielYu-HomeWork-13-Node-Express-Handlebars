
USE rclx0qkq74yq3pnv;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    -- SET devoured defalut false
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);