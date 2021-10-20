"use strict";
var Produto = /** @class */ (function () {
    function Produto(nome, descricao, preco, fabricante) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.fabricante = fabricante;
    }
    return Produto;
}());
var salsicha = new Produto("salsicha", "bom", 20.0, "cache");
console.log('nome do produto >>> ', salsicha);
