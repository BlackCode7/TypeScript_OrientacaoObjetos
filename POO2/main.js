"use strict";
exports.__esModule = true;
var Personagem_1 = require("./Personagem");
var prompt_sync_1 = require("prompt-sync");
var teclado = (0, prompt_sync_1["default"])();
var option = 0;
var sansa = new Personagem_1["default"]("Sansa Stark", 20, 30, 50, 80);
while (option != 9) {
    console.log("====================================");
    console.log(": 1 treinar ataque");
    console.log(": 2 treinar defesa");
    console.log(": 3 imprimir");
    console.log(": 4 entrar em batalha ");
    console.log(": 8 imprimir atributos ");
    console.log(": 9 sair");
    console.log("====================================");
    option = Number(teclado("Escolha um opção"));
    switch (option) {
        case 1:
            sansa.ataque += Math.random() * 7;
            sansa.energia -= Math.random() * 10;
            sansa.nome += 20;
            console.log(sansa.ataque);
            break;
        case 2:
            sansa.defesa += Math.random() * 5;
            sansa.energia -= Math.random() * 14;
            break;
        case 3:
            sansa.energia += Math.random() * 10;
            if (sansa.energia < 1) {
                console.log("You Lose!");
            }
            break;
        case 4:
            sansa.energia -= Math.random() * 10;
            break;
        case 8:
            console.log("Sansa esta no jogo ", sansa);
            break;
        default:
            console.log("Sansa no Jogo .");
            break;
    }
}
