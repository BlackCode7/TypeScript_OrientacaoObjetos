// Generics é usado para criar código reutilizado
function identidade(argumento:any){
    return argumento;
}

// O tipo any tonar genérica os tipos, é usado guando não sabemos qual é
// o tipo retornado
function identidade_2<T>(argumento:T):T{
    // O 'T' assume o papel de um tipo genérico
    return argumento;
}

let implenta_1 = identidade_2<string>("Minha String")
console.log(implenta_1)
let implenta_2 = identidade_2("Minha String 2")
console.log(implenta_2)


function identidade_3<T>(argumento:T[]):T[]{
    // O 'T' assume o papel de um tipo genérico
    console.log(argumento.length);
    return argumento;
}

let testeGeneric = identidade_3("Minha string no teste")
console.log(testeGeneric)


