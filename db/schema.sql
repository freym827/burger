CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
  `id` INT( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255) NULL,
  'devoured' BOOLEAN NULL,
  
  PRIMARY KEY ( `id` ) 
);