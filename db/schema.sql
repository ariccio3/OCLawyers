CREATE DATABASE IF NOT EXISTS oclawyers_db;
USE oclawyers_db;

CREATE TABLE leads (
	id int NOT NULL AUTO_INCREMENT,
	firstName varchar(255) NOT NULL,
	lastName varchar(255) NOT NULL,
	cityArrested varchar(255) NOT NULL,
	crime varchar(255) NOT NULL,
	felonyOrMist varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

SELECT*FROM leads;
