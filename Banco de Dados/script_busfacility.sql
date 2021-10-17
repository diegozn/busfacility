create database Busfacility;
use Busfacility;


CREATE TABLE Empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nomeEmpresa VARCHAR(50),
    representante VARCHAR(50),
    cnpj VARCHAR(50),
    email VARCHAR(100),
    endereco VARCHAR(100),
    telefoneEmpresa VARCHAR(20),
    senha VARCHAR(10)
)  AUTO_INCREMENT = 1;

CREATE TABLE Motorista (
    idMotorista INT PRIMARY KEY AUTO_INCREMENT,
    nomeMotorista VARCHAR(50),
    telefoneMotorista VARCHAR(50)
) AUTO_INCREMENT = 11;

CREATE TABLE Itinerario (
    idItinerario INT PRIMARY KEY AUTO_INCREMENT,
    nomeLinha VARCHAR(30),
    origem VARCHAR(30),
    destino VARCHAR(30)
) AUTO_INCREMENT = 101;

CREATE TABLE Onibus (
    idOnibus INT PRIMARY KEY AUTO_INCREMENT,
    chassi VARCHAR(30),
    placa VARCHAR(10),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa)
        REFERENCES Empresa (idEmpresa),
    fkMotorista INT,
    FOREIGN KEY (fkMotorista)
        REFERENCES Motorista (idMotorista)
) AUTO_INCREMENT = 201;

CREATE TABLE Sensor (
    idSensor INT PRIMARY KEY AUTO_INCREMENT,
    n_Serie VARCHAR(30),
    posicao VARCHAR(30),
    fkOnibus INT,
    FOREIGN KEY (fkOnibus)
        REFERENCES Onibus (idOnibus)
) AUTO_INCREMENT = 301;

CREATE TABLE InfoOnibus (
    idInfo INT PRIMARY KEY AUTO_INCREMENT,
    mediaPassageiros INT,
    fkItinerario INT,
    FOREIGN KEY (fkItinerario)
        REFERENCES Itinerario (idItinerario),
    fkOnibus INT,
    FOREIGN KEY (fkOnibus)
        REFERENCES Onibus (idOnibus)
) AUTO_INCREMENT = 401;

CREATE TABLE Registro (
    idRegistro INT PRIMARY KEY AUTO_INCREMENT,
    dataHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    contagem INT,
    fkSensor INT,
    FOREIGN KEY (fkSensor)
        REFERENCES Sensor (idSensor)
) AUTO_INCREMENT = 501;

CREATE TABLE UsuariosEmpresas (
    idUsuarios INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(30),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa)
        REFERENCES Empresa (idEmpresa)
) AUTO_INCREMENT = 601;

insert into Empresa (nomeEmpresa, representante, cnpj, email, endereco, telefoneEmpresa, senha)
values 
('Johnson', 'Neymar', '13. 222. 333/0001-44.', 'Johnson@neymar.com', 'R. Afonso silva, 138', '2641-2641', '12345667'),
('Pfzier', 'Douglas', '22. 111. 333/0001-12.', 'pfizer@pfizer.com.br', 'R. Imparato, 23', '2645-2289', '21231214'),
('HP', 'Harry', '33. 444. 111/0001-13.', 'HP@gmail.com', 'R. dos Alfeneiros, 138', '2246-7080', '12345678'),
('Via4', 'João', '35. 465. 666/0001-17.', 'via4@via4.com', 'Av. Paulista, 987', '2283-9623', 'VIA4SENHA');

SELECT * FROM Empresa;

insert into Motorista (nomeMotorista, telefoneMotorista)
values 
('Carlos', '9987-1232'),
('Douglas', '98012-8822'),
('Paulo', '99113-4343'),
('Pedro', '98439-5555');

SELECT * FROM Motorista;

insert into Itinerario (nomeLinha, origem, destino)
values 
('Jd. Bandeirantes', 'Term. Pedro II', 'R. Rua Quimanga'),
('Jd. do Castelo', 'Term. Penha', 'Av. Cangaíba'),
('Metro Penha', 'Av. Cangaíba', 'Term. Penha');

SELECT * FROM Itinerario;

insert into Onibus (chassi, placa, fkEmpresa, fkMotorista)
values 
('9B2N3D34F', 'DER-1324', 1, 11),
('A2D3D4G4', 'BTE-9090', 2, 12),
('S2F3G5H6', 'SEF-1242', 3, 13),
('G6H4J8K5', 'ZDF-1528', 4, 14);

SELECT * FROM Onibus;

insert into Sensor (n_Serie, posicao, fkOnibus)
values 
('4535', 'assento da frente 3', 201),
('3545', 'corredor fundo', 202),
('7654', 'assento do fundo 1', 203),
('1345', 'assento do fundo 3', 204);

SELECT * FROM Sensor;

insert into InfoOnibus (mediaPassageiros, fkItinerario, fkOnibus)
values 
(35, 101, 201),
(30, 101, 202),
(14, 102, 203),
(28, 103, 204);

SELECT * FROM InfoOnibus;

insert into Registro (dataHora, contagem, fkSensor)
values 
('2021-09-04 15:40:03', 26, 301),
('2021-09-05 23:09:03', 19, 302),
('2021-09-06 21:15:23', 14, 303),
('2021-09-24 14:35:24', 28, 304);

SELECT * FROM Registro;