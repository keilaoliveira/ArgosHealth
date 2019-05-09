create database argoshealth;

use argoshealth;

-- create table login(
-- 	idLogin int primary key auto_increment,
-- 	login varchar(10) not null,
--     senha varchar(20) not null,
--     tipoAcesso enum ('adm', 'cli') not null,
-- 	constraint unique_login unique(login)
-- );

create table exercicioPessoa(
	idExercicoPessoa int primary key auto_increment,
    exercicio varchar(30) not null,
    series int(2) not null,
    repeticoes int(2) not null,
    carga enum ('leve', 'medio', 'pesado') not null,
    intervalo varchar(10) not null,
    idPessoa varchar(50)
);

create table pessoa(
	idPessoa int primary key auto_increment,
    nomePessoa varchar(50) not null,
    dtNascimento varchar(10) not null,
    numCelular varchar(11) not null,
    peso double not null,
    altura int(3) not null,
    email varchar(50) not null,
    senha varchar(20) not null
);

create table refeicaoPessoa(
	idRefeicaoPessoa int primary key auto_increment,
    quantidade int not null,
    dtConsumo varchar(10) not null
);

create table alimento(
	idAlimento int primary key auto_increment,
    descricao varchar(45) not null,
    calorias int(3) not null,
    carboidratos int(3) not null,
    proteinas int(3) not null,
    gordura int(3) not null
);

create table horaAgua(
	idHoraAgua int primary key auto_increment,
    horario varchar(10) not null
);

create table qtdAgua(
	idQtdAgua int primary key auto_increment,
    ml int(4)
);

create table agua(
	idAgua int primary key auto_increment,
    dtConsumo varchar(10) not null
);

create table exercicio(
	idExercicio int primary key auto_increment,
    descricao varchar(45) not null
);

--alter table login add f_idPessoa int;
--alter table login add constraint fkLoginPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

alter table exercicioPessoa add f_idPessoa int;
--alter table exercicioPessoa add constraint fkExercicioPessoaPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

alter table exercicioPessoa add f_idExercicio int;
--alter table exercicioPessoa add constraint fkExercicioPessoaExercicio foreign key (f_idExercicio) references exercicio(idExercicio);

alter table refeicaoPessoa add f_idPessoa int;
--alter table refeicaoPessoa add constraint fkRefeicaoPessoaPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

alter table refeicaoPessoa add f_idAlimento int;
--alter table refeicaoPessoa add constraint fkRefeicaoPEssoaAlimento foreign key (f_idPessoa) references alimento(idAlimento);

alter table agua add f_idHoraAgua int;
--alter table agua add constraint fkAguaHoraAgua foreign key (f_idHoraAgua) references horaAgua(idHoraAgua);

alter table agua add f_idQtdAgua int;
--alter table agua add constraint fkAguaQtdAgua foreign key (f_idQtdAgua) references qtdAgua(idQtdAgua);

alter table agua add f_idPessoa int;
--alter table agua add constraint fkAguaPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

--Dados Iniciais
insert into alimento values(1, 'Brigadeiro', 300, 10, 12, 120);
insert into alimento values(2, 'Pão Francês', 150, 29, 4, 1);
insert into alimento values(4, 'Leite', 99, 7, 5, 5);
insert into alimento values(3, 'Mussarela', 63, 0, 4, 4);