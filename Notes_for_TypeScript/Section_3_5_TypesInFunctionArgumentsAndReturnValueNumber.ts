// When you create a function in TypeScript you can specify the data type 
// of the function's arguments and the data type for the return value
// Here the syntax x: number, y: number means that the function can accept two arguments x and y and they can
// only be numbers and (...): number { means that the return value can only be a number

// Quando você cria uma função em TypeScript, você pode especificar o tipo 
// de dados dos argumentos da função e os dados tipo para o valor de retorno
// Aqui a sintaxe x: number, y: number significa que função pode aceitar 2 argumentos
// x e y e eles podem ser apenas números (...): number{ significa que o retorno da 
// função pode ser apenas números }

// exemplo
function sum(x: number, y: number): number { 
    return x + y;
}
sum(21, 985);

// 
function anyAny(x: any, y: any): number { 
    return x + y;
}
anyAny(21, 77);

function anyAny_1(x: any, y: any): string{
    return `${x} concatenate with ${y} `;
}

// for type boolean not functional
function anyAny_bool(x:boolean, y:boolean){
    console.log(`${x} ${y}`);
}
anyAny_bool(false, true);

// In case of the string ?

