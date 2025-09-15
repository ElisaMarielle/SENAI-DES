CREATE DATABASE biblioteca;

USE biblioteca; 

CREATE TABLE `emprestimos` (
  `id` int(11) NOT NULL,
  `usuarioId` int(11) DEFAULT NULL,
  `livroId` int(11) DEFAULT NULL,
  `dataEmp` date DEFAULT NULL,
  `dataDev` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `emprestimos` (`id`, `usuarioId`, `livroId`, `dataEmp`, `dataDev`) VALUES
(1, 2, 1, '2025-07-10', '2025-08-10'),
(2, 1, 3, '2025-08-03', '2025-09-03');

CREATE TABLE `livros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `publicacao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `livros` (`id`, `titulo`, `autor`, `publicacao`) VALUES
(1, 'O Gato Preto', 'Edgar Allan Poe', 1957),
(2, 'Harry Potter', 'J. K. Rowling', 1998),
(3, 'Moby Dick', 'Herman Melville', 1851);

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `nascimento` date DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `usuarios` (`id`, `nome`, `nascimento`, `email`) VALUES
(1, 'Fulano de Moraes', '1990-12-02', 'emailteste@gmail.com'),
(2, 'Ciclano Azevedo', '2000-05-22', 'emailteste2@gmail.com'),
(3, 'Beltrano Teixeira', '2003-09-13', 'emailteste3@gmail.com');

ALTER TABLE `emprestimos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`),
  ADD KEY `livroId` (`livroId`);

ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `emprestimos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
ALTER TABLE `emprestimos`
  ADD CONSTRAINT `emprestimos_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `emprestimos_ibfk_2` FOREIGN KEY (`livroId`) REFERENCES `usuarios` (`id`);
COMMIT;
