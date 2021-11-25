function addMetaData(target: any){
    target.__customMetadata = {someKey_1 : "Teste decorator metadata"}
    return target;
}

@addMetaData
class Person_1{
    private _name: string;
    public constructor(name: string){
        this._name = name;
    }
    public greet_1(){
        return this._name;
    }
}

function getMetaDataFromClass(target: any){
    return target.__customMetadata;
}

console.log(getMetaDataFromClass(Person_1));

function getMetadataFromInstance_1(target: any){
    return target.constructor.__customMetadata;
}

let person111 = new Person_1("Anderson");
let person222 = new Person_1("Simone");
console.log(getMetadataFromInstance_1(person111));
console.log(getMetadataFromInstance_1(person222));