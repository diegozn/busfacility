create database Busfacility;
use busfacility;

create table cadastro_empresa (
id int primary key,
nome varchar (50),
representante varchar (50),
cnpj varchar (50),
email varchar(100),
endereço varchar (100),
telefone varchar (20),
senha varchar (10)
);

create table motorista (
id int primary key,
nome varchar (50),
telefone varchar (50)
);

create table itinerario (
id int primary key,
nome_linha varchar (30),
origem varchar (30),
destino varchar (30)
);

create table onibus (
id int primary key,
chassi varchar (30),
placa varchar (10),
id_empresa int,
foreign key (id_empresa)
references cadastro_empresa (id),
id_motorista int,
foreign key (id_motorista)
references motorista (id)
);

create table sensor (
id int primary key,
n_serie varchar (30),
posicao varchar (30),
id_onibus int,
foreign key (id_onibus)
references onibus (id)
);

create table info_onibus  (
id int primary key,
media_passageiros int,
id_itinerario int,
foreign key (id_itinerario)
references itinerario (id),
id_onibus int,
foreign key (id_onibus)
references onibus (id)
);

create table registro (
id int primary key,
data_e_hora datetime default current_timestamp,
contagem int,
id_onibus int,
foreign key (id_onibus)
references onibus (id),
id_sensor int,
foreign key (id_sensor)
references sensor (id)
);

insert into cadastro_empresa
values (1, 'Johnson', 'Neymar', '13. 222. 333/0001-44.', 'Johnson@neymar.com', 'R. Afonso silva, 138', '2641-2641', '12345667'),
(2, 'Pfzier', 'Douglas', '22. 111. 333/0001-12.', 'pfizer@pfizer.com.br', 'R. Imparato, 23', '2645-2289', '21231214'),
(3, 'HP', 'Harry', '33. 444. 111/0001-13.', 'HP@gmail.com', 'R. dos Alfeneiros, 138', '2246-7080', '12345678'),
(4, 'Via4', 'João', '35. 465. 666/0001-17.', 'via4@via4.com', 'Av. Paulista, 987', '2283-9623', 'VIA4SENHA');

select * from cadastro_empresa;

insert into motorista
values (1, 'Carlos', '9987-1232'),
(2, 'Douglas', '98012-8822'),
(3, 'Paulo', '99113-4343'),
(4, 'Pedro', '98439-5555');

select * from motorista;

insert into itinerario
values (1, 'Jd. Bandeirantes', 'Term. Pedro II', 'R. Rua Quimanga'),
(2, 'Jd. do Castelo', 'Term. Penha', 'Av. Cangaíba'),
(3, 'Metro Penha', 'Av. Cangaíba', 'Term. Penha');

select * from itinerario;

insert into onibus
values (1, '9B2N3D34F', 'DER-1324', 1, 1),
(2, 'A2D3D4G4', 'BTE-9090', 2, 2),
(3, 'S2F3G5H6', 'SEF-1242', 3, 3),
(4, 'G6H4J8K5', 'ZDF-1528', 4, 4);

select * from onibus;

insert into sensor
values (1, '4535', 'assento da frente 3', 1),
(2, '3545', 'corredor fundo', 2),
(3, '7654', 'assento do fundo 1', 3),
(4, '1345', 'assento do fundo 3', 4);

select * from sensor;

insert into info_onibus
values (1, 35, 1, 1),
(2, 30, 1, 2),
(3, 14, 2, 3),
(4, 28, 3, 4);

select * from info_onibus;

insert into registro
values (1, '2021-09-04 15:40:03', 26, 1, 1),
(2, '2021-09-05 23:09:03', 19, 2, 2),
(3, '2021-09-06 21:15:23', 14, 3, 3),
(4, '2021-09-24 14:35:24', 28, 4, 4);

select * from registro;