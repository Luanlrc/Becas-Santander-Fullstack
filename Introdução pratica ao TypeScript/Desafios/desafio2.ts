
enum Trabalho {
    padeiro,atriz
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.atriz
};

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.padeiro
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.padeiro
}