// Quando um membro esta marcado com private ele não pode ser
// acessado por alguém fora da classe em que ele foi instanciado 

class Pessoas_3{
    private nome: string;

    constructor(nome: string){
        this.nome = nome;
        console.log("Atributo em Pessoas_3 mrcado com Private ", this.nome);
    }

    public static metodoEstatico(){
        console.log("Este é o metodo estatico de Pessoas_3 ");
    }

    public bomDia(){
        console.log("Metodo Bom dia da class Pessoas_3 " + this.nome);
    }

    /*
    private public sobreCarga(){
        return 10;
    }
    */
}

let outraPessoas = new Pessoas_3('Simone');
console.log(outraPessoas.bomDia());