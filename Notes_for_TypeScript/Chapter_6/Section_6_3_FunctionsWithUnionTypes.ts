// Unindo diferentes typos
//                VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
function whatTime(hour:number|string, minute:number|string){
    return hour+':'+minute;
}
console.log(whatTime(1,45));
console.log(whatTime("1",45));
console.log(whatTime(1,"45"));
console.log(whatTime("1","45"));

// TypeScript treats these parameters 
// as a single type that is a union of the 
// other types, so your function must be 
// able to handle parameters of any 
// type that is in the union.

// O TypeScript trata estes parâmetros 
// como um único tipo que é uma união do 
// outros tipos, portanto, sua função deve ser 
// capaz de lidar com parâmetros de qualquer 
// tipo que está no sindicato.

// function addTen(start: number|string): number{
//     if(typeof number === "string"){
//         return parseInt(number)+10;
//     }else{
//         return number + 10;
//     }
// }