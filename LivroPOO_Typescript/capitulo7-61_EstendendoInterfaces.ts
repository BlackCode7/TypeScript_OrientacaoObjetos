// assim como as classes as interfaces também podem ser estendidas

interface SerVivo{ 
    nome: string;
}

interface Dinossauros {
    numerodepatas: number;
}

//Estendendo as 2 outras interfaces
interface Mamifero extends SerVivo, Dinossauros {
    tempoDeAmamentacao: number;
}