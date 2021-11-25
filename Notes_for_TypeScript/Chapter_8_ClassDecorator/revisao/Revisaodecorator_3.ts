function setTestDecorator_3(constructor: any){
    return class constructor{
        teste = "teste do decorator 333";
    }
}

@setTestDecorator_3
class TesteClassDecorator_3{}
    console.log(TesteClassDecorator_3)
