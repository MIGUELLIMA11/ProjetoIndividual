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

