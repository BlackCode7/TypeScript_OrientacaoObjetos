class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(): string{
        return this.greeting;
    }
}
// Instancia do objeto
let greet = new Greeter(" Simone Ferreira");
console.log(greet.greet());