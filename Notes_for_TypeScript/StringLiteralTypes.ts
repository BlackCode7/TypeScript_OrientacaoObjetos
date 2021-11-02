//String literal types allow you to specify the exact value a string can have.
//Os tipos literais de string permitem especificar o valor exato que uma string pode ter.

import { isFunctionTypeNode } from "typescript";

// EXEMPLO              
let myFavoritePet: "Dog";
myFavoritePet = "Dog";

//Any other string will give an error.
//Qualquer outra string dará um erro.

 type Species = "Dogs" | "Cats"| "Birds";
 function buyPet(pet: Species, name: string) : Pet { /*...*/ };

// let dog = buyPet(myFavoritePet /*"dogs" as defined above */, "Rocky")
// String Literal Types can be used to distinguish overloads.
// Os tipos literais de string podem ser usados para distinguir as sobrecargas.
// EXEMPLO

//function buyPet(pet: Species, name: string) : Pet;
function buyPet(pet: "cats", name:string): Cat;
function buyPet(pet: "dogs", name:string):Dog;
function buyPet(pet:"birds", name:string):Bird;
function buyPet(pet:Species, name: string):Pet{/*...*/};
let dog = buyPet(myFavoritePet /* "dog" as defined above */, "Rocky");

// They works well for User-Defined Type Guards
// Eles funcionam bem para Guardas de Tipo Definidos pelo Usuário
interface Pet{
    species: Species;
    eat();
    sleep();
}
interface Cat extends Pet{
    species: "cat";
}
interface Bird extends Pet{
    species: "bird";
    sing();
}
// validation pets
function petIsCat(pet:Pet): pet is Cat{
    return pet.species === 'cat';
}
function petIsBird(pet: Pet): pet is Bird{
    retunr pet.species === "bird";
}
function myWithPet(pet: Pet){    
    if(petIsCat(pet)){
        // pet is now from type Cat (pet: Cat)
        pet.eat();
        pet.sleep();
    } else {
        // pet is now from type Bird (pet: Bird)
        pet.eat()
        pet.sleep();
        pet.sing();
    }
}
