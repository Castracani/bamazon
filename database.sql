DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(80) NOT NULL,
department_name VARCHAR(80) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("9mm ammo", "Outdoors", 9.25, 80), ("Dark Souls 3", "Video Games", 25.00, 40), ("Sparkling Water", "Beverages", 1.50, 50), ("Mousepad", "Electronics", 18.00, 25), ("Cat Litter", "Pets", 14.00, 30), ("Peanuts", "Food", 3.30, 50), ("Sunscreen", "Outdoors", 4.40, 50), ("Blender", "Kitchen", 124.00, 15), ("Water Fountain", "Pets", 13.00, 10), ("Speakers", "Electronics", 69.00, 30);