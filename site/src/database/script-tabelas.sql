
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
  cidade VARCHAR(45) NULL,
  estado VARCHAR(45) NULL,
  regiaoPais VARCHAR(45) NULL,
  cep CHAR(9) NULL,
  PRIMARY KEY (idEndereco));

CREATE TABLE IF NOT EXISTS usuario (
  idUsuario INT auto_increment NOT NULL,
  nome VARCHAR(45) NULL,
  sobrenome VARCHAR(45) NULL,
  email VARCHAR(45) NULL,
  idade VARCHAR(45) NULL,
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

INSERT INTO endereco (cidade, estado, regiaoPais, cep)
VALUES ('São Paulo', 'São Paulo', 'Sudeste', '01234-567');

INSERT INTO endereco (cidade, estado, regiaoPais, cep)
VALUES ('Rio de Janeiro', 'Rio de Janeiro', 'Sudeste', '12345-678');

INSERT INTO endereco (cidade, estado, regiaoPais, cep)
VALUES ('Curitiba', 'Paraná', 'Sul', '98765-432');

INSERT INTO endereco (cidade, estado, regiaoPais, cep)
VALUES ('Salvador', 'Bahia', 'Nordeste', '54321-098');

INSERT INTO endereco (cidade, estado, regiaoPais, cep)
VALUES ('Brasília', 'Distrito Federal', 'Centro-Oeste', '65432-109');

/* insert usuario*/

INSERT INTO usuario (nome, sobrenome, email, idade, fkEndereco)
VALUES ('João', 'Silva', 'joao@example.com', '25', 1);

INSERT INTO usuario (nome, sobrenome, email, idade, fkEndereco)
VALUES ('Maria', 'Souza', 'maria@example.com', '30', 2);

INSERT INTO usuario (nome, sobrenome, email, idade, fkEndereco)
VALUES ('Pedro', 'Santos', 'pedro@example.com', '35', 3);

INSERT INTO usuario (nome, sobrenome, email, idade, fkEndereco)
VALUES ('Ana', 'Ferreira', 'ana@example.com', '28', 4);

INSERT INTO usuario (nome, sobrenome, email, idade, fkEndereco)
VALUES ('Lucas', 'Oliveira', 'lucas@example.com', '82', 5);


-- select forum
select usuario.nome, mensagens.conteudo, mensagens.dataHora from usuario join mensagens on idUsuario = fkusuario;

-- selects analytic regiao país
select count(*) from endereco where regiaoPais like 'Nordeste';
select count(*) from endereco where regiaoPais like 'Sudeste';
select count(*) from endereco where regiaoPais like 'Norte';
select count(*) from endereco where regiaoPais like 'Sul';
select count(*) from endereco where regiaoPais like 'Centro-Oeste';

-- select faixas de idade
select count(*) from usuario where idade < 18;
select count(*) from usuario where idade >= 18 AND idade <= 25;
select count(*) from usuario where idade >= 26 AND idade <= 35;
select count(*) from usuario where idade >= 36 AND idade <= 45;
select count(*) from usuario where idade >= 46 AND idade <= 60;
select count(*) from usuario where idade > 60;


select usuario.nome, usuario.sobrenome, usuario.email, usuario.idade, endereco.cidade, endereco.estado, endereco.regiaoPais, endereco.cep
 from usuario join endereco on fkEndereco = idEndereco;






