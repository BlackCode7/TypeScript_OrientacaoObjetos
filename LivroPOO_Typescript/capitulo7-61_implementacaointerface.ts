interface InterfaceCarro{ 
    motor: string;
    placa ?: string;
    carroLuxo(nome: string): boolean;
}

class Carro implements InterfaceCarro{
    constructor( public motor: string, public placa: string){}
    carroLuxo(nome: string){
        if(nome = 'BMW'){
            return true;
        }        
    }
}