mysql

USE loja;

CREATE TABLE Usuarios (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(160),
    nascimento DATE,
    endereco VARCHAR(100),
    telefone VARCHAR(15)
);

CREATE TABLE Pedidos(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    clienteId INTEGER,
    datahora DATETIME,
    nomeProduto VARCHAR(50),
    valor DECIMAL(4,3),
    FOREIGN KEY (clienteId) REFERENCES Usuarios(id)
);

INSERT INTO usuarios
VALUES (DEFAULT, "Fulano da Silva", "2025-m-d", "Rua Sem Saida, 120", "11912345678");

UPDATE usuarios
WHERE id=1

DELETE FROM usuarios
WHERE id=1;
