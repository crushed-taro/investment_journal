USE mysql;

DROP DATABASE investmentdb;
CREATE DATABASE investmentdb;
SHOW DATABASES;


# DROP USER 'crushed_taro';
CREATE USER 'crushed_taro'@'%' IDENTIFIED BY 'crushed_taro';
SELECT * FROM user;


GRANT ALL PRIVILEGES ON investmentdb.* TO 'crushed_taro'@'%';
SHOW GRANTS FOR 'crushed_taro'@'%';


USE investmentdb;