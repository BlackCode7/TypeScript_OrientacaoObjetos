// A const Enum is the same as a normal Enum. Except 
// that no Object is generated at compile time. Instead, the literal
// values are substituted where the const Enum is used.

// Um Enum const é o mesmo que um Enum normal. Exceto 
// que nenhum objeto é gerado em tempo de compilação. 
// Ao invés disso, o literal são substituídos onde a 
// constante Enum é utilizada.

const enum NinjaActivity{
    Espionage,
    Sabotage,
    Assassination
}

let myFavorityNinjaActivate = NinjaActivity.Espionage;
console.log(myFavorityNinjaActivate);

// JavaScript: Then only the number of the value is compiled into the code
var myFavoriteNinjaActivity = 0 /* Espionage */;
console.log(myFavoriteNinjaActivity); // 0

// TypeScript: the same for the other constant examples
console.log(NinjaActivity["Sabotage"]);

// TypeScript: A normal Enum
enum PirateActivity {
    Boarding,
    Drinking,
    Fencing
}
let myPirateActivity = 0 ;
console.log(myPirateActivity); 

/* ***************************** Resultado da compilação ***************************** */
// JavaScript: The Enum after the compiling
// var PirateActivity;
// (function (PirateActivity) {
// PirateActivity[PirateActivity["Boarding"] = 0] = "Boarding";
// PirateActivity[PirateActivity["Drinking"] = 1] = "Drinking";
// PirateActivity[PirateActivity["Fencing"] = 2] = "Fencing";
// })(PirateActivity || (PirateActivity = {}));
/* ***************************** Resultado da compilação ***************************** */

// TypeScript: A normal use of this Enum 
let myFavorityPirateActivity = PirateActivity.Boarding;
console.log(myFavorityPirateActivity);

/* ***************************** Resultado da compilação ***************************** */

// JavaScript: Looks quite similar in JavaScript
// var myFavoritePirateActivity = PirateActivity.Boarding;
// console.log(myFavoritePirateActivity); // 0

/* ***************************** Resultado da compilação ***************************** */


