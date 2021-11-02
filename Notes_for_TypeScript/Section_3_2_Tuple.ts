// Array type with known and possibly different types
// Tipo de matriz com tipos conhecidos e possivelmente diferentes:

let day: [number, string];
day = [0, "Teste string"];

// invalid because 'zero' not is number
//day = ['zero', 'Monday'];
console.log(day[0]);
console.log(day[1] );

//day[2] = 'Sunday';// definition type not corret
//day[3] = false; // definition type not corret

