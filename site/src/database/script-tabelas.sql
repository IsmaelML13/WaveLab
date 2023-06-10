
-- drop database wavelab;
create database wavelab;
use wavelab;

/*CREATE TABLE endereco (
    idEndereco INT PRIMARY KEY auto_increment,
    cep char(9),
    logradouro VARCHAR(100),
    regiao VARCHAR(30),
    numero VARCHAR(10),
    complemento VARCHAR(90),
    bairro varchar(45), 
    cidade varchar(25),
    uf varchar(3)
);*/

/* create table usuario (
idUsuario int primary key auto_increment, 
nome varchar(50),
sobrenome varchar(40),
email varchar(60),
idade int,
senha varchar(30),
fkEndereco int, FOREIGN KEY (fkEndereco) REFERENCES endereco(idEndereco)
); */

-- alter table Endereco modify idUsuario int auto_increment;
select * from usuario;
select * from endereco;
-- drop database wavelab;

-- -----------------------------------------------------
-- Table `mydb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS endereco (
  idEndereco INT auto_increment NOT NULL,
  cep char(9),
    logradouro VARCHAR(100),
    regiao VARCHAR(30),
    numero VARCHAR(10),
    complemento VARCHAR(90),
    bairro varchar(45), 
    cidade varchar(25),
    uf varchar(3),
  PRIMARY KEY (idEndereco));

CREATE TABLE IF NOT EXISTS usuario (
  idUsuario INT auto_increment NOT NULL,
  nome VARCHAR(45) NULL,
  sobrenome VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  idade VARCHAR(45) NULL,
  senha varchar(20),
  fkEndereco INT NOT NULL,
  PRIMARY KEY (idUsuario),
  CONSTRAINT fkEndereco
    FOREIGN KEY (fkEndereco)
    REFERENCES endereco(idEndereco)
    );
    ALTER TABLE usuario
ADD CONSTRAINT unique_fkEndereco UNIQUE (fkEndereco);

 
CREATE TABLE IF NOT EXISTS mensagens (
  idMensagens INT auto_increment NOT NULL,
  conteudo VARCHAR(200) NULL,
  dataHora DATETIME NULL,
  fkusuario INT NOT NULL,
  PRIMARY KEY (idMensagens, fkusuario),
  CONSTRAINT fk_mensagens_usuario1
    FOREIGN KEY (fkusuario)
    REFERENCES usuario (idUsuario)
    );

INSERT INTO endereco (cep, logradouro, regiao, numero, complemento, bairro, cidade, uf)
VALUES ('01234-567', 'Rua A', 'Sul', '123', 'Apto 1', 'Bairro 1', 'São Paulo', 'SP'),
       ('12345-678', 'Avenida B', 'Sul', '456', 'Casa 2', 'Bairro 2', 'Rio de Janeiro', 'RJ'),
       ('23456-789', 'Rua C', 'Nordeste', '789', 'Sala 3', 'Bairro 3', 'Curitiba', 'PR'),
       ('34567-890', 'Avenida D', 'Sudeste', '987', 'Loja 4', 'Bairro 4', 'Salvador', 'BA'),
       ('45678-901', 'Rua E', 'Centro-oeste', '654', 'Andar 5', 'Bairro 5', 'Brasília', 'DF');



/* insert usuario*/

INSERT INTO usuario (nome, sobrenome, email, idade, fkEndereco)
VALUES ('João', 'Silva', 'joao@example.com', '25', 1),
       ('Maria', 'Souza', 'maria@example.com', '30', 2),
       ('Pedro', 'Santos', 'pedro@example.com', '35', 3),
       ('Ana', 'Ferreira', 'ana@example.com', '28', 4),
       ('Lucas', 'Oliveira', 'lucas@example.com', '82', 5);



-- select forum
select usuario.nome, mensagens.conteudo, mensagens.dataHora from usuario join mensagens on idUsuario = fkusuario;

-- selects analytic regiao país
select count(*) from endereco where regiao like 'Nordeste';
select count(*) from endereco where regiao like 'Sudeste';
select count(*) from endereco where regiao like 'Norte';
select count(*) from endereco where regiao like 'Sul';
select count(*) from endereco where regiao like 'Centro-oeste';

-- select faixas de idade
select count(*) as total from usuario where idade < 18;
select count(*) from usuario where idade >= 18 AND idade <= 25;
select count(*) from usuario where idade >= 26 AND idade <= 35;
select count(*) from usuario where idade >= 36 AND idade <= 45;
select count(*) from usuario where idade >= 46 AND idade <= 60;
select count(*) from usuario where idade > 60;


select usuario.nome, usuario.sobrenome, usuario.email, usuario.idade, endereco.cidade, endereco.estado, endereco.regiaoPais, endereco.cep
 from usuario join endereco on fkEndereco = idEndereco;

drop table endereco;
drop table usuario;
drop table mensagens;

SELECT (idEndereco) FROM endereco
    ORDER BY idEndereco DESC
    LIMIT 1;
    
    select * from endereco;



