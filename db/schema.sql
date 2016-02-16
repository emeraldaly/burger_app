### Schema

CREATE DATABASE burger_app_db;
USE burger_app_db;

CREATE TABLE burger_table
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured TINYINT,
date TIMESTAMP,
PRIMARY KEY (id)
);

SHOW COLUMNS from burger_table;
