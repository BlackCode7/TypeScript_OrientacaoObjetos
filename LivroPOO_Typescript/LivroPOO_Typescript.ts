/*
As classes em TypeScript são tem as seguintes caracteristicas:
1 - Os objetos são arrays associativos aumentados comprotótipos

2 - As funções são de primeria classe ou seja, possuem propriedades e métodos
    podem ser passdas como argumentos 
    podem ser atribuidos a variáveis
    e podem ser retornados como qualquer outro objeto
*/

class Autor{    
    public nome;
    constructor(nome){ this.nome = nome; console.log(this.nome);}
}
// Instância da classe Autor >>> construtor entra em ação
let autor = new Autor("Anderson");
console.log(autor.nome === Autor.prototype.nome);

/***************************************************/

/*
class Pessoa{
    public nome;
    constructor(nome){
        this.nome = nome;
        console.log(this.nome + "no constructor");
    }
}
// chamando a instancia da classe Pessoas()
let pessoas = new Pessoa("Marcelo")

*/

/***************************************************/

class Pessoa{
    public nome;
    constructor(nome){
        this.nome = nome;
        console.log(this.nome + "no constructor");
    }
    // método static
    static metodoEstatico(){
        console.log("Este é um método abstrato!");
    }
}

let pessoas = new Pessoa("Marcelo");
Pessoa.metodoEstatico();
//////////////////////////////////////////////////////////
class Pessoas{
    nome: string;
    constructor(nome:string){
        this.nome = nome;
        console.log(this.nome + "no constructor");
    }
    static metodoEstatico(){
        console.log("Metodo Abstrato");
    }
    bomDia(){
        console.log("Bom Dia" + this.nome);
    }
}

// Classe que herdara da classe pessoas
class Profissional extends Pessoas{
    constructor(nome:string){
        super(nome);
        console.log(this.nome + " É um profissional");
    }
}

// Instancias da classe
let pessoas = new Pessoas("Anderson");
Pessoas.metodoEstatico();

// Instancias da classe
let p = new Profissional("Carlos");
