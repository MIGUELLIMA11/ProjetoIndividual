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

Create table Tentativas(
FkUsuario INT,
FkQuiz INT,
idTentativa INT,
DtInicio datetime,
DtFinal datetime);

