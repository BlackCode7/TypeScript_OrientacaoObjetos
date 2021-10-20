export default class Personagem {
    constructor(public nome : string, public ataque : number, public defesa : number, public energia : number, public vida : number) {}

    status(): string {
        return (
            "Guerreiro: \n" + 
            "\nNome: " +
            this.nome +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nVida: " + this.vida.toFixed(1))
        );
    }

    /*
    Warnning:
    Para leitura de dados >>> Deve-se usar parametros na função
    Para imprimir retornos de função >>> Deve-se usar o retorno de função    
    */

    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        this.isDead();
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;        
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }

    descansar(): void {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    }

    batalhar(): number {
        let desgaste: number = Math.random() * 100;
        this.energia -= desgaste; 
        return desgaste;       
    }

    isDead(): boolean {
        if (this.energia < 0) {
            return true;
        } else {
            return false;
        }
    }

}
