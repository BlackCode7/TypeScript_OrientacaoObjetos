//Acessando as mesma variáveis dentro de outras funçoes
// Funções de scopo >>> NÃO SÃO RECOMENDADAS
function f(){
    var a = 10;
    return function g (){
        var b = a + 1;
        return b
    }
}
var g = f();
g(); // imprime o valor 11

/*

var >>> não são recomendadas porque elas vazam do scopo onde são definidas podendo
    serem acessadas em qualquer parte do código causando erros na aplicação


let >>> São a nova forma de declarar variáveis em javascript porque tem
    um scopo de função mais seguro porque a variável declarada
    como let não permite que seus valores sejem vazados para outras instancias 
    do código.

const >>> As variáveis const tb são uma nova forma de declaração de variáveis em javascript
    também são mais seguras assim como as variáveis let, a diferença é que 
    as variáveis const não permitem que seus valores sejem trocados 
    com facilidade por se tratar de uma constante

*/

// DESESTRUTURAÇÃO
let lista = [1, 2]
let [um, dois] = lista;
console.log(um);
console.log(dois);

let primeiro = lista[0];
let segundo = lista[1];
console.log(primeiro);
console.log(segundo);

// Com parametros para uma Função
function funcaoLista([primeiro, segundo]: [number, number]){
    console.log(primeiro);
    console.log(segundo);
}

//

