class Car{
    public position: number = 0;
    private speed: number = 42;

    // create method move()
    move(){
        this.position += this.speed;
    }
}

// EXTENDENDO CLASS Car
class SelfDrivingCar extends Car{
    move() {
        super.move();
        super.move();
    }
}

var variavelCar = new Car("32", 54, 3);
variavelCar.move();
console.log(variavelCar.position)
//console.log(variavelCar.speed)
