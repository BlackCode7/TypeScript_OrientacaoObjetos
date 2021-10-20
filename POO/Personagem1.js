"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Personagem1 = /** @class */ (function () {
    function Personagem1(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem1;
}());
var teclado = (0, prompt_sync_1.default)();
var option = 0;
var sansa = new Personagem1("Sansa", 20, 50, 10, 80);
while (option != 9) {
    console.log("====================================");
    console.log(": 1 treinar ataque");
    console.log(": 2 treinar defesa");
    console.log(": 3 imprimir");
    console.log(": 9 sair");
    console.log("====================================");
    option = Number(teclado("Escolha um opção"));
    switch (option) {
        case 1:
            sansa.ataque += 20;
            break;
        case 3:
            console.log(sansa.ataque);
            break;
        case 3:
            console.log("Sansa >>> ", sansa);
        default:
            console.log("Energia do personagem >>> ", sansa.energia);
            break;
    }
}
// instanciando e criando um novo objeto
sansa.ataque = 80;
sansa.defesa = 100;
console.log("Nome do personagem >>> ", sansa.nome);
