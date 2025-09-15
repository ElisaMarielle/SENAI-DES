CREATE DATABASE escola;

USE escola;

CREATE TABLE professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100),
    telefone VARCHAR (15)
);

CREATE TABLE disciplinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (30),
    professorId INT,
    FOREIGN KEY (professorId) REFERENCES professores(id)
);

CREATE TABLE turmas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (20),
    periodo VARCHAR (10)
);

CREATE TABLE possui (
    disciplinaId INT,
    turmaId INT,
    FOREIGN KEY (disciplinaId) REFERENCES disciplinas(id),
    FOREIGN KEY (turmaId) REFERENCES turmas(id)
);

INSERT INTO professores (nome, email, telefone)
VALUES ("PROFESSOR 1", "emial.teste@gmail.com", "11999787878");

INSERT INTO disciplinas (nome, professorId)
VALUES ("fisica", 1);

INSERT INTO turmas (nome, periodo)
VALUES ("primeiro medio", "manha");

INSERT INTO possui (disciplinaId, turmaId)
VALUES (1, 1);