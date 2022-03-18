/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import {Aluno} from "./Models/Aluno"

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
var readlineSync = require('readline-sync');

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	console.log('Bem vindo ao sistema das notinhas mil grau');

	let alunos = []

	for(var i = 1; i <= 3; i++)
	{
		
		var NomeAluno = readlineSync.question('Digite o Nome do Aluno: ');
		var NotaAluno = readlineSync.question('Digite o Idade do Aluno: ');
		var NotaAluno = readlineSync.question('Digite o Nota do Aluno: ');

		var primeiroAluno : Aluno = new Aluno(NomeAluno,NotaAluno, parseInt(NotaAluno));
		alunos[i] = primeiroAluno
	}

	const somaDasNotas = alunos.reduce((a,b) => {return a += b.nota}, 0)
	console.log(`a soma da nota dos 3 alunos é: ${somaDasNotas}`)
	
});
