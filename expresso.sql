create database exemplo_db;

use exemplo_db;

create TABLE usuarios(
id int primary key not null auto_increment,
nome VARCHAR(30),
email VARCHAR(30)
);

INSERT INTO usuarios (nome, email) values ("Diogo", "diogo@gmail.com");
select * from usuarios;




