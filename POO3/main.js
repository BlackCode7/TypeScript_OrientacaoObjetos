"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem_1 = __importDefault(require("./Personagem"));
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var teclado = (0, prompt_sync_1.default)();
var option = 0;
var personagem = new Personagem_1.default("Anderson", 60, 70, 50, 78);
while (option != 9) {
    console.log("============================================");
    console.log("|1 Treinar Ataque ==========================");
    console.log("|2 Treinar Defesa ==========================");
    console.log("|3 Descansar ===============================");
    console.log("|4 Entrar em batalha =======================");
    console.log("|8 Imprimir Atributos ======================");
    console.log("|9 sair ====================================");
    console.log("============================================");
    option = Number(teclado("Escolha uma opção"));
    switch (option) {
        case 1:
            personagem.treinarAtaque();
            personagem.status();
            break;
        case 2:
            personagem.treinarDefesa();
            personagem.status();
            break;
        case 3:
            personagem.descansar();
            personagem.status();
            break;
        case 4:
            personagem.batalhar();
            personagem.status();
            break;
        case 8:
            personagem.status();
            break;
        default:
            break;
    }
}
