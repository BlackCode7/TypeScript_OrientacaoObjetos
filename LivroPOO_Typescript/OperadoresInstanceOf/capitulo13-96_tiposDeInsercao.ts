// TIPOS DE INSERÇÃO

// Os tipos de inserção combinam múltiplos tipos em um e 
// estão intimamente relacionados com os tipos de união
// os tipos de inserção são usados com o mixin

function extends<T, U>(primeiro: T, segundo: U): T & U{
    
    let resultado = <T&U>{};
    
    for (let id in primeiro){
        (<any>resultado)[id] = (<any>primeiro)[id];
    }
    
    for (let id in segundo){
        if (!resultado.hasOwnProperty(id)){
            (<any>resultado)[id] = (<any>segundo)[id];
        }
    }
    
    return resultado;
}

class Nomes{
    constructor(public nome: string) {}
}

interface IRegistro{
    log(): void;
}

class Registra implements IRegistro{
    log(){
        // ...
    }
}

var nome = extends(new Nomes("Anderson"), new Registro());
var n = nome.nome;
nome.log();