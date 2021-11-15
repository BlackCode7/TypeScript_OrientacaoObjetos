// Suppose we want to receive a function as a parameter, we can do it like this:
// Vamos supor que queremos passar uma função como parametro

// function foo(otherFunc: Function): void{
//     ///...
// }

function foo(constructorFunc : {
    new()
}) { // If we want to receive a constructor as a parameter:
    new constructorFunc();
}

function foo_1(constructorWithParamsFunc : {
    new(num : number)
}) {
    new constructorWithParamsFunc(1);
}

// Or to make it easier to read we can define an interface describing the constructor:
// interface IConstructor {
//     new();
// }
// function foo_3(contructorFunc_3: IConstructor) {
//     new constructorFunc_3(2);
// }  *** FAILED ***


// interface IFunction {
//     (): void;
// }
// function foo_2(func : IFunction) {
//     func();
// }


interface INumberFunction {
    (num : number): string;
}
function foo_2(func : INumberFunction) {
    func(1);
} // Test OK


// interface ITFunc < T,
// U > {
//     (item : T): U;
// }
// function foo_3<T, U>(contructorFunc : ITFunc < T, U >, item : T) : U {
//     return func_(item);
// }  *** Teste FAILED ***

