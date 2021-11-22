/*
Tipos de decorators
Ao se desenvolver decorators é importante saber que existem vários tipos, 
esses tipos são determinados pelo alvo em que está sendo aplicado, sendo 
que cada tipo tem suas particularidades e assinaturas diferentes. 
Atualmente os tipos existentes são:

Class Decorator.
Property Decorator.
Method Decorator.
Accessor Decorator.
Parameter Decorator.

Class decorator  */

function setTestDecorator(constructor: any) {
    return class constructor{ 
        teste = "Teste para decorar a classe"
    }  
}

@setTestDecorator
class TestClassDecorated{}

console.log(TestClassDecorated)

/*
Property Decorator
Um decorator de propriedade deve ser declarado antes da declaração 
da propriedade. Dessa vez, o decorator, recebe 2 parâmetros, 
target e key. O parâmetro target é o protótipo da classe em que 
está sendo aplicado o decorator, já o parâmetro key é o nome da 
propriedade da classe em que está sendo aplicado o decorator.

decorator de propriedade
*/

function analyze(target: any, key: string) {
    console.log(target, key);
  }
  
class Task {
    // aqui vem o decorator
    @analyze
    public title: string;

    constructor(title: string) { this.title = title; }
}