Create database gurrenlagann;
use gurrenlagann;

Create table Usuarios(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
Nome VARCHAR(45),
Telefone CHAR(11),
Email VARCHAR(45),
Senha VARCHAR(45));

Create table Quiz(
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
Acertos int, 
erros int,
Total int);

CREATE TABLE Tentativas (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    FkUsuario INT,
    FkQuiz INT,
    DtInicio DATETIME,
    DtFinal DATETIME,
    FOREIGN KEY (FkUsuario) REFERENCES Usuarios(idUsuario),
    FOREIGN KEY (FkQuiz) REFERENCES Quiz(idQuiz)
);

-- Selecionar o banco
USE gurrenlagann;

-- Inserir dados na tabela Usuarios
INSERT INTO Usuarios (Nome, Telefone, Email, Senha) VALUES
('Simon', '11987654321', 'simon@teppelin.com', 'spiral123'),
('Kamina', '11888888888', 'kamina@gurrenlagann.com', 'believeit'),
('Yoko', '11911223344', 'yoko@littletown.com', 'sniperQueen'),
('Nia', '11777777777', 'nia@anti-spiral.org', 'princessLove'),
('Viral', '11999999999', 'viral@beastmen.com', 'beast123'),
('Rossiu', '11666666666', 'rossiu@colony.net', 'logicFirst'),
('Leeron', '11555555555', 'leeron@techlab.com', 'fabulous1'),
('Dayakka', '11444444444', 'dayakka@dai-gurren.com', 'defenderX');

-- Inserir dados na tabela Quiz
INSERT INTO Quiz (Acertos, erros, Total) VALUES
(8, 2, 10),
(7, 3, 10),
(9, 1, 10),
(6, 4, 10),
(5, 5, 10),
(10, 0, 10),
(4, 6, 10),
(3, 7, 10);

-- Inserir dados na tabela Tentativas
INSERT INTO Tentativas (FkUsuario, FkQuiz, DtInicio, DtFinal) VALUES
(1, 1, '2025-05-10 14:00:00', '2025-05-10 14:10:00'),
(2, 2, '2025-05-11 15:30:00', '2025-05-11 15:42:00'),
(3, 3, '2025-05-12 10:00:00', '2025-05-12 10:15:00'),
(4, 4, '2025-05-13 13:45:00', '2025-05-13 13:55:00'),
(5, 5, '2025-05-14 09:00:00', '2025-05-14 09:10:00'),
(6, 6, '2025-05-14 16:00:00', '2025-05-14 16:20:00'),
(7, 7, '2025-05-15 08:30:00', '2025-05-15 08:40:00'),
(8, 8, '2025-05-15 10:00:00', '2025-05-15 10:12:00');
