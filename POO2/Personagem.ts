export default class Personagem {
  sansa: any;
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
  // metodos sem retorno
  status(): void {
    console.log("guerreiro: ");
    console.log("Nome: ", this.nome);
    console.log("Energia: ", this.energia.toFixed(1));
    console.log("Ataque: ", this.ataque.toFixed(1));
    console.log("defesa: ", this.defesa.toFixed(1));
    console.log("Vida", this.vida.toFixed(1));
  }

  atacar(): void {
    this.sansa.ataque += Math.random() * 7;
    this.sansa.energia -= Math.random() * 10;

    if (this.sansa.energia < 1) {
      console.log("You Lose!");
    } else {
      if (this.sansa.defesa > 100) {
        this.sansa.defesa = 0;
      }
    }
  }
}
