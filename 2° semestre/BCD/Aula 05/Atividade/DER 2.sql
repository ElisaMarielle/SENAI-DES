CREATE DATABASE mecanico;

USE mecanico;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    cpf VARCHAR(15)
);

CREATE TABLE veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    modelo VARCHAR(50),
    placa VARCHAR (10),
    categoria VARCHAR(50)
);

CREATE TABLE contratos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    datain DATE,
    datafim DATE,
    valor DECIMAL (4,3),
    clienteId INT,
    veiculoId INT,
    FOREIGN KEY (clienteId) REFERENCES clientes(id),
    FOREIGN KEY (veiculoId) REFERENCES veiculos(id)
);

CREATE TABLE manutencoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR (50),
    data DATE,
    observacao VARCHAR (200),
    veiculoId INT,
    FOREIGN KEY (veiculoId) REFERENCES veiculos(id)
);

INSERT INTO clientes (nome, cpf)
VALUES ("Fulano de Tal", "12345678912");

INSERT INTO veiculos (modelo, placa, categoria)
VALUES ("creta", "D4RRFT6", "2000");

INSERT INTO contratos (datain, datafim, valor, clienteId, veiculoId)
VALUES ("2025-04-12", "2028-12-30", 1200.75, 1, 1);

INSERT INTO manutencoes (tipo, data, observacao, veiculoId)
VALUES ("troca de roda", "2025-07-25", "troca de rosa traseira esquerda", 1);