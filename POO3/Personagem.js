"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(nome, ataque, defesa, energia, vida) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.energia = energia;
        this.vida = vida;
    }
    Personagem.prototype.status = function () {
        console.log("Guerreiro >>> ");
        console.log("Nome >>> ", this.nome);
        console.log("Energia >>> ", this.energia.toFixed(2));
        console.log("Ataque >>> ", this.ataque.toFixed(2));
        console.log("Defesa >>> ", this.defesa.toFixed(2));
    };
    Personagem.prototype.treinarAtaque = function () {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.energia < 100) {
            console.log("Você perdeu o jogo!");
        }
        else {
            if (this.defesa > 100) {
                this.defesa = 0;
            }
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if (this.energia < 0) {
            console.log("Você perdeu o jogo!");
        }
        else {
            if (this.defesa > 100) {
                this.defesa = 0;
            }
        }
    };
    Personagem.prototype.descansar = function () {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem.prototype.batalhar = function () {
        this.energia -= Math.random() * 100;
        if (this.energia < 100) {
            console.log("Você perdeu o jogo!");
        }
    };
    return Personagem;
}());
exports.default = Personagem;
