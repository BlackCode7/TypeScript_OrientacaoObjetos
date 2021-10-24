/*
Acessand o a mesma variave dentro  de outras Funções

FUNÇÃO de SCOPO => não recomendada

*/
function f() {
    var a = 10;
    return function g() {
        // estou fazendo b acessar a estando dentro de outra 
        // função function g(){}
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g);
g();
console.log(g());
