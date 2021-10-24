// na typescript cada membro é public por padrão
class Pessoas_2{
    public nome: string;
    public constructor(nome: string){
        this.nome = nome;
        console.log(this.nome + " Variavel na class Pessoas")
    }

    public metodoStatic(){
        console.log("Metodo abstrato de Pessoas_2");
    }

    public bomDia(){
        console.log("Bom dia metodo bomDia() " + this.nome)
    }

    public sobrecarga(){
        return 10;
    }
}