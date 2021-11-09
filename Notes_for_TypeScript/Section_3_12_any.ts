// When unsure of a type, any is available:
// Quando não temos certeza do tipo

// this first definition is default
let anything: any = "I am a string";
// this overriders the default case
anything = 54;
console.log(anything);

// this first definition is default
let todos: Array<any> = [
    'carro',
    'volante',
    'rodas',
    'marcha',
    'janelas'
];
// this overriders the default case
todos = [
    1,
    2,
    3,
    456,
    677,
    8
]
console.log(todos)

// this is a setting default
let defaulVar: Array<any> = ['Livro', 'Pagina', 'Titulo', 'Capitulo']
// this overrider the default case
defaulVar = [true, false]
console.log(defaulVar);

function anyVar() { 
    // this is a setting default
    let AnyVar: Array<any> = [1, 234, 5678, 9000];
    // this overrider the default case
    AnyVar = ["Cabeça", "Orelha", "pescoço"]
    console.log(AnyVar);
}
anyVar() 
