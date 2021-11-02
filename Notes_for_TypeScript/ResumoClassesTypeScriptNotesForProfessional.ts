class Greeter{
    greeting: string;

    constructor(message: string){
        this.greeting = message;        
    }
    greet(): string {
        return this.greeting;
    }
}

//Instanciando classes
let greeter = new Greeter("Carlos");
console.log(greeter.greet());