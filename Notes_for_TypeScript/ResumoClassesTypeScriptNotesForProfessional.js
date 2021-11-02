var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
}());
//Instanciando classes
var greeter = new Greeter("Carlos");
console.log(greeter.greet());
