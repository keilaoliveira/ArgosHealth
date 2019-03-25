create database argoshealth;

use argoshealth;

create table login(
	idLogin int primary key,
	login varchar(10),
    senha varchar(20),
    tipoAcesso enum ('adm', 'cli') not null,
	constraint unique_login unique(login)
);

create table exercicioPessoa(
	idExercicoPessoa int primary key,
    series int(1),
    repeticoes int(1),
    carga enum ('leve', 'medio', 'pesado') not null,
    intervalo time not null
);

create table pessoa(
	idPessoa int primary key,
    nomePessoa varchar(50) not null,
    dtNascimento varchar(10) not null,
    numCelular varchar(11) not null,
    peso float(6,3) not null,
    altura float(4,3) not null
);

create table refeicaoPessoa(
	idRefeicaoPessoa int primary key,
    quantidade int not null,
    dtConsumo date not null
);

create table alimento(
	idAlimento int primary key,
    descricao varchar(45) not null,
    calorias int(3) not null,
    carboidratos int(3) not null,
    proteinas int(3) not null,
    gordura int(3) not null
);

create table horaAgua(
	idHoraAgua int primary key,
    horario time
);

create table qtdAgua(
	idQtdAgua int primary key,
    ml int(4)
);

create table agua(
	idAgua int primary key,
    dtConsumo date
);

create table exercicio(
	idExercicio int primary key,
    descricao varchar(45) not null
);

alter table login add f_idPessoa int;
alter table login add constraint fkLoginPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

alter table exercicioPessoa add f_idPessoa int;
alter table exercicioPessoa add constraint fkExercicioPessoaPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

alter table exercicioPessoa add f_idExercicio int;
alter table exercicioPessoa add constraint fkExercicioPessoaExercicio foreign key (f_idExercicio) references exercicio(idExercicio);

alter table refeicaoPessoa add f_idPessoa int;
alter table refeicaoPessoa add constraint fkRefeicaoPessoaPessoa foreign key (f_idPessoa) references pessoa(idPessoa);

alter table refeicaoPessoa add f_idAlimento int;
alter table refeicaoPessoa add constraint fkRefeicaoPEssoaAlimento foreign key (f_idPessoa) references alimento(idAlimento);

alter table agua add f_idHoraAgua int;
alter table agua add constraint fkAguaHoraAgua foreign key (f_idHoraAgua) references horaAgua(idHoraAgua);

alter table agua add f_idQtdAgua int;
alter table agua add constraint fkAguaQtdAgua foreign key (f_idQtdAgua) references qtdAgua(idQtdAgua);

alter table agua add f_idPessoa int;
alter table agua add constraint fkAguaPessoa foreign key (f_idPessoa) references pessoa(idPessoa);