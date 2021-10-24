class Pessoas_AB{
    nome: string;
    constructor(nome: string){
        this.nome = nome;
        console.log("Atributo nome de Pessoas_AB " + this.nome)
    }

    static metodoEstatico(){
        console.log("Metodo abstrato ");
    }

    bomDia(){
        console.log("Bom dia " + this.nome);
    }

    protected sobrecarga(){
        return 10;
    }
}


class Profissional_3 extends Pessoas_AB{
    constructor(nome: string){
        super(nome);
        console.log(this.nome + " é um profissional!")
    }

    sobrecarga(){
        return super.sobrecarga() + 10;
    }
}

let pessoas_22 = new Pessoas_AB("Simone Barcelona");
let sobreCargaPessoas = pessoas_22.sobrecarga();
let p_22 = new Profissional_3("CarlosProfissional");
let sobrecargaPrifissional = p.sobreCARGA();