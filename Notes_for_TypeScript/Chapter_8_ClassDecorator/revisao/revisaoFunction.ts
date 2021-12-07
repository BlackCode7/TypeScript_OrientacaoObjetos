const inventory1 = [
    {name: 'Jhon', age: 24},
    {name: 'Anderson1', age: 43},
    {name: 'Simone', age: 48}
]

function findName(nameFunction: any) {
    return nameFunction.name === 'Anderson1'
}

console.log(inventory1[0])
findName("Simone Ferreira")