// Optional Parameters
// In TypeScript, every parameter is assumed to be required by the function. You can add a ? at the end of a
// parameter name to set it as optional.

function buildName(firstName: string, lastName = "Arrived"){
    //...
}
buildName("Anderson", "Caxias")
buildName("Anderson")
buildName("Anderson", undefined)

// //Invalid
// function buildName_1(firstName?: string, lastName: string){
//     // ...
// }
