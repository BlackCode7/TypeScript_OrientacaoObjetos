// If you have no type at all, commonly 
// used for functions that do not return anything:
function log(): void{
    console.log("I am return Nothing!");
}
log();

// If you no type at all,            
// commonly used for functions that do not return anything:
function nothing(): void{
    console.log(10 + 2);
}
nothing();
//if you not type at all, 
//commonly used for functions that do not return anything:
function returnTrue(){
    return (nothing);
}
returnTrue()