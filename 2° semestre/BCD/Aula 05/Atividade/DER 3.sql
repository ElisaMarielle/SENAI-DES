CREATE DATABASE mstream;

USE mstream;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE playlist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    usuarioId INT,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

CREATE TABLE musicas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR (50),
    artista VARCHAR (30),
    duracao VARCHAR (15)
);

CREATE TABLE playlist_musica (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ordem VARCHAR (20),
    musicaId INT,
    playlistId INT,
    FOREIGN KEY (musicaId) REFERENCES musicas(id),
    FOREIGN KEY (playlistId) REFERENCES playlist(id)
);

INSERT INTO usuarios (nome, email)
VALUES ("Fulano de Tal", "email.teste@gmail.com");

INSERT INTO playlist (nome, usuarioId)
VALUES ("playlist super legal", 1);

INSERT INTO musicas (titulo, artista, duracao)
VALUES ("musica 1", "Fulaninho mc", "3 minutos");

INSERT INTO playlist_musica (ordem, musicaId, playlistId)
VALUES ("aleatorio", 1, 1);