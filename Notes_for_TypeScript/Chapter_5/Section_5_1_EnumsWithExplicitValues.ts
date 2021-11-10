// Let's say if you have something like
enum MimeType_0 { JPEG, PNG, PDF };
//console.log(MimeType_0)
//Get Values enums
let getEnumsValues: Array<string> = [];
for(let value in MimeType_0){
    if(typeof MimeType_0[value] === 'number'){
        getEnumsValues.push(value);
    }
}
getEnumsValues.forEach(result=> console.log(result))

// But some of the time it is important to have the enum resolve 
// to a different type. E.g. you receive the value from
// backend / frontend / another system which is definitely a 
// string. This could be a pain, but luckily there is this method:
enum MimeType_1 {JPEG = <any>'image/jpeg',
                 PNG = <any>'image/png',
                 PDF = <any>'application/pdf'}

let getEnumValues_0: Array<string> = [];

for(let value in MimeType_1){
    if(typeof MimeType_1[value] == 'string'){
        getEnumValues_0.push(value);
    }
}
getEnumValues_0.forEach(value => console.log(value));
//console.log(MimeType_1)


//Since TypeScript 2.4 it's possible to declare string enums:
enum MimeType_2{ JPEG = <any>'image/jpeg',
                 PNG = <any>'image/png',
                 PDF = <any>'application/pdf' }

let GetValuesEnum:Array<string> = [];

for(let value1 in MimeType_2){
    if(typeof MimeType_2[value1] === 'string'){
        GetValuesEnum.push(value1);
    }
}
GetValuesEnum.forEach(data1 => console.log(data1));
//console.log(MimeType_2)


// You provide values numerics using with the same method
// console.log("Everybody Values >>> ",MyType)
// console.log(MyType.Value)
// console.log(MyType.ValueEx)
// console.log(MyType.ValueEx2)
enum MyType { Value = 3, ValueEx = 30, ValueEx2 = 300 }

let GetEnumValueMyType: Array<any> = [];

for(let value in MyType){
    if(typeof MyType[value] === "number"){
        GetEnumValueMyType.push(value);
    }
}

GetEnumValueMyType.forEach(data => console.log(data))

//Fancier types also work, since non-const enums 
//are real objects at runtime, for example
enum FancyType {
    OneArr = <any>[1],
    TwoArr = <any>[2, 2],
    ThreeArr = <any>[3, 3, 3]
    }
console.log(FancyType)
console.log(FancyType.OneArr)
console.log(FancyType.TwoArr)
console.log(FancyType.ThreeArr)


