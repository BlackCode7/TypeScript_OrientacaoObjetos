// Using Decorator Metadata
function addMetadata(target: any){
    target.__customMetadata = {someKey: "someValue"};   
    return target;
}
// We can then apply class decorator
// I'm created one function of with decor one class Person()
@addMetadata
class Person{
    private _name: string;
    public constructor(name: string){
        this._name = name;
    }
    public greet(){
        return this._name;
    }
}
function getMetadataFromClass(target: any){
    return target.__customMetadata;
}
console.log(getMetadataFromClass(Person));

function getMetadataFromInstance(target: any){
    return target.constructor.__customMetadata;
}

let person1 = new Person("John");
let person2 = new Person("Lisa");
console.log(getMetadataFromInstance(person1));
console.log(getMetadataFromInstance(person2));