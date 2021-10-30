interface Leite{
    tipoLeite(): string;
}

class Vaca implements Leite{
    constructor(private tipo: string){}
    tipoLeite(){
        return this.tipo;
    }
}
class Cabra implements Leite{
    constructor(private tipo: string){
        return this.tipo;
    }
}

function tipoLeite(algumLeite: any){
    if (algumLeite instanceof Vaca){
        console.log("O leite é de vaca!");
    }
    if (algumLeite instanceof Cabra){
        console.log("O leite é de cabra!");
    }
}
let leiteDeVaca = new Vaca("B");
let leiteDeCabra = new Cabra("A");

//Imprimindo
tipoLeite(leiteDeVaca.tipoLeite())
tipoLeite(leiteDeCabra.tipoLeite())