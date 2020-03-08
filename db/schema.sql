DROP DATABASE IF EXISTS nozama;

CREATE DATABASE nozama;

USE nozama;

CREATE TABLE products (
uid VARCHAR(10) NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
url VARCHAR(255) NOT NULL,
price INT NOT NULL,
description VARCHAR(255) NOT NULL,
category VARCHAR(50) NOT NULL,
vendor VARCHAR(50) NOT NULL,
stars INT NOT NULL,
size VARCHAR (20)
);

INSERT INTO products (UID, NAME, URL, PRICE, DESCRIPTION, CATEGORY, VENDOR, STARS, SIZE) VALUES ('1', 'BlenderBottle Classic Loop Top Shaker Bottle', 'https://cdn.shopify.com/s/files/1/1099/1898/products/PS_-Shopping-Cart-FCBlack.png?v=1579910436', 7.80, 'this is a blender bottle', 'Sports', 'Blender Bottle', 5, '20-Ounce');
INSERT INTO products (UID, NAME, URL, PRICE, DESCRIPTION, CATEGORY, VENDOR, STARS, SIZE) VALUES ('2', 'Dragonball-Z Goku Eating Noodles Nozama Exclusive', 'https://images-na.ssl-images-amazon.com/images/I/61SabM4R5fL._AC_SL1300_.jpg', 12.99, 'this is goku', 'Toys', 'Funko', 5, '3 ¾ inches');
INSERT INTO products (UID, NAME, URL, PRICE, DESCRIPTION, CATEGORY, VENDOR, STARS, SIZE) VALUES ('3', 'Apple MacBook Pro (13" Retina, Touch Bar, 2.8GHz Quad-core Intel Core i7, 16GB RAM, 1TB SSD)', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-silver-select-201807?wid=892&hei=820&&qlt=80&.v=1529520056377', 2599.00, 'MacBook Pro has a new eighth-generation quad-core Intel processor with Turbo Boost up to 4.1GHz', 'Electronics', 'Apple', 5, '13 inches');