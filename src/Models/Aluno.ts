class Aluno
{
    // Properties
     public nome: string;
     public idade: number;
     public nota: number;


    constructor(nome : string, idade : number, nota: number  )
    {
        this.nome = nome; 
        this.idade = idade; 
        this.nota = nota;
    }
}

export {Aluno}