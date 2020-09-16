INSERT INTO burgers (burger_name)
VALUES ('Bigger Better Burger'), ('Cheese Burger'), ('Chili Burger'),('Juicy Lucy');

INSERT INTO burgers (burger_name, devoured)
VALUES ('Bison Burger', true);

SELECT * FROM burgers;

UPDATE burgers
SET devoured = true
WHERE id = 1;
