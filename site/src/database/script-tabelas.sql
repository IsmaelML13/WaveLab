-- drop database wavelab;
create database wavelab;
use wavelab;

CREATE TABLE endereco (
    idEndereco INT PRIMARY KEY auto_increment,
    cep char(9),
    logradouro VARCHAR(100),
    regiao VARCHAR(30),
    numero VARCHAR(10),
    complemento VARCHAR(90),
    bairro varchar(45), 
    cidade varchar(25),
    uf varchar(3)
);

create table usuario (
idUsuario int primary key auto_increment, 
nome varchar(50),
sobrenome varchar(40),
email varchar(60),
idade int,
senha varchar(30),
fkEndereco int, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco)
);

-- alter table Endereco modify idUsuario int auto_increment;
select * from usuario;
select * from endereco;
-- drop database wavelab;


