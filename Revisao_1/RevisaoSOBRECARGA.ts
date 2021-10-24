class Pessoas{
    nome: string;
    constructor(nome: string){
        this.nome = nome;
        console.log(this.nome);
    }
    //Criando metodo statico
    static metodoEstatico(){
        console.log("Este é um metodo abstrato");
    }
    bomDia(){
        console.log("Bom dia ", this.nome);
    }
    sobreCARGA(){
        return 10;
    }
}

// Estendendo a classe pessoas
class Profissional extends Pessoas{
    constructor(nome: string){
        super(nome);
        console.log(this.nome, " Nome da classe extendida de pessoas")
    }
    // a palavra chave do super chama a classe pai
    sobreCARGA(){
        return super.sobreCARGA()+10;
    }
}

let pessoas = new Pessoas('Anderson');
pessoas.bomDia();
Pessoas.metodoEstatico();

let sobreCargaPessoas = pessoas.sobreCARGA();
console.log(`linha 20 >>> Sobre carga de Pessoas ` + sobreCargaPessoas);

let p = new Profissional('Simone');
console.log(` Sobre carga de profissional ` + sobreCargaPessoas);