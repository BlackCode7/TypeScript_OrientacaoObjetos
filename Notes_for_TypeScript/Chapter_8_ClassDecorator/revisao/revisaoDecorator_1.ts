function addMetaData1(target: any){
    target.__customMetadata = { result: "Testando a revisão de Decorators in typescript" };
    return target;
}

// Create classe for aplicate decorators 
@addMetaData1
class PersonInteligent{
    public _nameIntel : string;
    // create constructor
    public constructor(nameIntel: string) {
        this._nameIntel = nameIntel;
    }
}

// Get decorators of the class PersonInteligent
function getMetaDataFromClass1(target: any){
    return target.__customMetadata;
}
let person11 = new PersonInteligent("Anderson");
let person22 = new PersonInteligent("Simone");
console.log(getMetaDataFromClass1(person11));
console.log(getMetaDataFromClass1(person22));