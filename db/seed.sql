INSERT INTO burgers (burger_name)
VALUES ('Bigger Better Burger'), ('Cheese burger'), ('Chili Burger'),('Juicy Lucy');

INSERT INTO burgers (burger_name, devoured)
VALUES ('Bison Burger', true);

SELECT * FROM burgers;

UPDATE burgers
SET devoure = true
WHERE id = 1;
