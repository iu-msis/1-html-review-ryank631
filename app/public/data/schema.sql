CREATE DATABASE IF NOT EXISTS serverHW;
USE serverHW;

DROP TABLE IF EXISTS books;
CREATE TABLE books (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    author varchar(100) NOT NULL,
    yearPublished INT NOT NULL,
    publisher varchar(100) NOT NULL,
    numberOfPages INT NOT NULL,
    msrp varchar(10) NOT NULL
);

INSERT INTO books (id, title, author, yearPublished, publisher, numberOfPages, msrp) VALUES 
(1, 'Gang Nights', 'Lester Watts',1976,'Bluebook Publishing',367,'$19.99'),
(2, 'Top FLight', 'Bill Russell',1987,'Penguin Publishing',136,'$7.99'),
(3, 'Trip to Mars', 'Tom Forester',2008,'Alguin Publishers',877,'$18.99'),
(4, 'The Giving Bush', 'Mike Tomphson',1999,'Ready Publishing',1204,'$43.99');
