import Personagem from "./Personagem";
import prompt from "prompt-sync";

let teclado = prompt();
let option: number = 0;
let sansa: Personagem = new Personagem("Sansa Stark", 20, 30, 50, 80);

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
      sansa.atacar();
      sansa.status();
      break;
      
    case 2:
      sansa.defesa += Math.random() * 5;
      sansa.energia -= Math.random() * 14;

      if (sansa.energia < 1) {
        console.log("You Lose!");
      } else {
        if (sansa.defesa > 100) {
          sansa.defesa = 0;
        }
      }

      // Chamda do metodo criado na Personagem
      sansa.status();

      break;
    case 3:
      sansa.energia += Math.random() * 10;
      if (sansa.energia > 100) {
        sansa.energia = 100;
      }

      // Chamda do metodo criado na Personagem
      sansa.status();

      break;
    case 4:
      sansa.energia -= Math.random() * 10;
      if (sansa.energia < 1) {
        console.log("You Lose!");
      }

      // Chamda do metodo criado na Personagem
      sansa.status();

      break;
    case 8:
      console.log("Sansa esta no jogo ", sansa);
      break;
    default:
      console.log("Sansa no Jogo .");
      break;
  }
}
