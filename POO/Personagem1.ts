import prompt from "prompt-sync";

class Personagem1 {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
}

let teclado = prompt();
let option: number = 0;
let sansa: Personagem1 = new Personagem1("Sansa", 20, 50, 10, 80);

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
      console.log("Energia do personagem >>> ",sansa.energia);
      break;
  }
}

// instanciando e criando um novo objeto

sansa.ataque = 80;
sansa.defesa = 100;
console.log("Nome do personagem >>> ", sansa.nome);
