// Full example code
// código de exemplo completo

let myFavoritePet: "dog";
myFavoritePet = "dog";

type Species = "cat" | "dog" | "bird"

// Can be interfaces or class
interface Pet{
    species: Species;
    name: string;
    eat();
    walk();
    sleep();
}
interface Cat extends Pet{
    species: "cat";
}
interface Dog extends Pet{
    species: "dog";
}
interface Bird extends Pet{
    species: "bird";
    sing();
}

function buyPet(pet: Species, name: string):Pet;
function buyPet(pet: "cat", name:string):Cat;
function buyPet(pet:"dog", name:string):Dog;
function buyPet(pet:"bird", name:string):Bird;
function buyPet(pet:Species, name:string):Pet{
    if(pet === "cat"){
        return{
            species: "cat",
            name: name,
            eat: function(){
                console.log(`${this.name} eats.`);
            },
            walk: function(){
                console.log(`${this.name} walks.`);
            },
            sleep: function(){
                console.log(`${this.name} sleeps.`);
            }
        } as Cat;
    }else if (pet === "dog"){
        return {
            species: "dog",
            name:name,
            eat: function(){
                console.log(`${this.name} eat.`);
            },
            walk: function(){
                console.log(`${this.name} walks.`);
            },
            sleep: function(){
                console.log(`${this.name} sleeps`);
            }
        }as Dog;
    } else if(pet==="bird"){
        return {
            species: "bird",
            name: name,
            eat: function(){
                console.log(`${this.name} eats.`)
            },
            walk: function(){
                console.log(`${this.name} walks.`)
            },
            sleep: function(){
                console.log(`${this.name} sleeps.`)
            },
            sing: function(){
                console.log(`${this.name} sings.`)
            }
        }as Bird;
    }else{
        throw `Sorry we do not have a ${pet}. Would you like to buy a dog?`;
    }
}

// definition of function
function petIsCat(pet: Pet):pet is Cat{
    return pet.species === 'cat';
}
function petIsDog(pet: Pet):pet is Dog{
    return pet.species === 'dog';
}
function petIsBird(pet: Pet):pet is Bird{
    return pet.species === 'bird';
}
function playWithPet(pet: Pet){
    console.log(`Hey ${this.name}, lets play.`);

    if (petIsCat(pet)){
        // pet is now from type Cat (pet: Cat)
        pet.eat();
        pet.sleep();
    }
    else if (petIsDog(pet)){
        // pet is now from type Dog (pet: Dog)
        pet.eat();
        pet.walk();
        pet.sleep();
    }
    else if (petIsBird(pet)){
        // pet is now from type Bird (pet: Bird)
        pet.eat()
        pet.sleep()
        pet.sing()
    } else {
        throw "An unknow pet. Did you buy a rock?" ;
    }
}

// dog is from type Dog (dog: Dog)
let dog = buyPet(myFavoritePet /* "dog" as defined above */, "Rocky");
playWithPet(dog);