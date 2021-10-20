"use strict";
exports.__esModule = true;
var prompt_sync_1 = require("prompt-sync");
// nome, energia, vida, ataque, defesa
// classe  
var Personagem = /** @class */ (function () {
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
var teclado = (0, prompt_sync_1["default"])();
var option = 0;
var sansa = new Personagem("Sansa Stark", 20, 30, 50, 80);
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
            sansa.nome += 20;
            console.log(sansa.ataque);
            break;
        case 3:
            console.log("Sansa >>> ", sansa);
        default:
            console.log();
            break;
    }
}
/*
//instancia do objeto
let sansa: Personagem;
// objeto
sansa = new Personagem('Sansa Stark', 20,20,50, 50);
sansa.nome = 'Sansa Stark'
sansa.ataque = 20
sansa.defesa = 20
sansa.energia = 50
console.log(sansa)
*/
/*

let hodo: Personagem;
hodo = new Personagem("Hodo Stark", 50,20,20,60);
hodo.nome = 'Hodo Stark'
hodo.ataque = 3
hodo.defesa = 20
hodo.energia = 50
hodo.vida = 3
console.log(hodo);

let brandow: Personagem = new Personagem("Brandow Stark", 0,10,20,100);
brandow.nome = 'Brandow Stark';
brandow.ataque = 0
brandow.defesa = 10
brandow.energia = 30
brandow.vida = 100
console.log(brandow);



let taiwin: Personagem;
taiwin = new Personagem("taiwin", 20,30,50,90);
console.log(taiwin);

let Tyrion: Personagem;
Tyrion = new Personagem("Tyrion", 20,60,20, 700);
console.log(Tyrion);

let John: Personagem;
John = new Personagem("John", 20, 30, 50, 90);
console.log(John);

let Aria: Personagem;
Aria = new Personagem("Aria", 60,100,150, 100);
console.log(Aria);

let LitleFinger: Personagem;
LitleFinger = new Personagem("LitleFinger", 60,50,70,20);
console.log(LitleFinger);

let Theon: Personagem;
Theon = new Personagem("Theon",80, 50, 90, 90);
console.log(Theon);

let James: Personagem;
James = new Personagem("James", 80, 99,100, 99);
console.log(James);

let Danerys: Personagem;
Danerys = new Personagem("Danerys", 100, 97, 200, 300);
console.log(Danerys);

let Baratheons: Personagem;
Baratheons = new Personagem("Baratheons", 20,30,10,60);
console.log(Baratheons);

*/
// atributos
