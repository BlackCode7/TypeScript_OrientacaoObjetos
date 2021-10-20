import Personagem from './Personagem';
import prompt from 'prompt-sync';

let teclado = prompt();
let option: number = 0;

let personagem: Personagem = new Personagem("Anderson", 60, 70, 50, 78);

while (option != 9 || personagem.isDead()) {
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
            console.log(personagem.status());
            break;

        case 2: 
            personagem.treinarDefesa();
            console.log(personagem.status());            
            break;

        case 3: 
        let hour: number = Number(teclado("Take number of the hours !"))
            personagem.descansar()
            console.log(personagem.status());            
            break;

        case 4: 
            let rest:number =  personagem.batalhar();
            console.log(`Esta batalha custou ${rest} de energia !`)
            console.log(personagem.status()); 
            break;

        case 8:
            console.log(personagem.status());
            break;
        default:
            break;
    }
}

console.log("Is Dead !")
