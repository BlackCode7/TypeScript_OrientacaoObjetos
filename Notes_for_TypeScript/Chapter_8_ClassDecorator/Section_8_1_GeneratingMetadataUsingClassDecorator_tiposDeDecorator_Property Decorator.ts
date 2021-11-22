/*
 Property Decorator
 Um decorator de propriedade deve ser declarado antes da declaração 
 da propriedade. Dessa vez, o decorator, recebe 2 parâmetros, 
 target e key. O parâmetro target é o protótipo da classe em que está 
 sendo aplicado o decorator, já o parâmetro key é o nome da propriedade 
 da classe em que está sendo aplicado o decorator. 
  
 Com esse pequeno exemplo, foi mostrado na tela Task {} 'title', que 
 representa o protótipo da classe e o nome da propriedade.
 Um ponto interessante e importante de se analisar, como já foi dito, 
 recebemos como parâmetro o protótipo da classe e não sua instância, 
 sabendo disso é possível ver no exemplo que o decorator foi executado 
 mesmo sem instanciarmos a classe, isso por que o decorator é chamado 
 no tempo de execução do arquivo. Isso deve ser levado em consideração 
 na hora de se criar seus decorators já que você não terá uma chamada 
 no decorator a cada vez que instanciar a classe.

 O interessante desse tipo de decorator é a possibilidade de aplicar 
 mudanças de comportamento nas propriedades.
 
 */

function logProperty(target: any, key: string){
    const newKey = `_${key}`;
    Object.defineProperty(target, key, { 
        get(){
            console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newVal){
            console.log(`Set ${key} => ${newVal}`);
            this[newKey] = newVal;
        },
        enumerable: true,
        configurable: true
    });
}

// Decorated attribut of the class
class Task1{
    @logProperty
    public id: number;

    @logProperty
    public title: string;

    constructor(id: number, title: string){ 
        this.id = id;
        this.title = title;
    }
}

const task = new Task1(1, "Testando a decoração da classe com logProperty");
console.log(task.id, task.title);