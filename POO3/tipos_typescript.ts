// tipo boolean
let tipo1Boolean: boolean = false;
let tipo2Boolean: boolean = true;

// tipo númerico no typescript
// aceitam todos os tipos como: 
// decimal,octal,hexadecimal,binário
let decimal: number = 6;
let hexadecimal: number = 0xf00d;
let binario: number = 0b1010;
let octagonal: number = 0o744;

// Tipo String typescript
let nameCompletTest: string = "SimonFerre";
let age: number = 47;
let text: string = "Hola my name is ${ nomeCompletTeste }, I'm ${ age } years old !"


// Tipo Array em typescript
// o typescript nos permite trabalhar com Matrizes 
// de 2 formas

// Matriz simples
let lista1: number[] = [1, 2, 3, 4, 5, 6, 7];
// Matriz genérica
let lista2: Array<number> = [1, 2, 3, 4, 5, 6, 7];


// Tipo tuple em typescript
let x: [string, number]; //Definindo as posições da tuple
x = ["Simone", 1290] // Está é a forma correta
x = [1290, "Simone"] // Posições erradas

// Tipo EMUN em typescript  
// o enum da nomes mais amigáveis para tipos numéricos
enum minhacor1 {Vermelho, Verde, Azul};
let cl: minhacor1 = minhacor1.Vermelho;
let cl1: minhacor1 = minhacor1.Verde;
let cl2: minhacor1 = minhacor1.Azul;

enum minhacor2 { Violeta=1, Rosa, Marfim, Purpura }
let cor1: minhacor2 = minhacor2.Violeta;
let cor2: minhacor2 = minhacor2.Rosa;
let cor3: minhacor2 = minhacor2.Marfim;
let cor4: minhacor2 = minhacor2.Purpura;

enum minhacor3 { Violeta=1, Rosa=2, Marfim=3, Purpura=4 }
let cor5: minhacor3 = minhacor3.Violeta;
let cor6: minhacor3 = minhacor3.Marfim;
let cor7: minhacor3 = minhacor3.Purpura;
let cor8: minhacor3 = minhacor3.Rosa;

enum minhacor4 { Violeta=1, Rosa=2, Marfim=3, Purpura=4 };
let cor9: string = minhacor4[2];
let cor10: string = minhacor4[1];
let cor11: string = minhacor4[0];
let cor12: string = minhacor4[3];

console.log(cor9, cor10, cor11, cor12);

/*
TIPO ANY
o tipo any recebe qualquer tipo de variavel
seja number, boolean, string      
usado para array com diversos tipos de dados
*/
let naoSei: any = 4; // tipo number
naoSei = "Qualquer string no any"; // tipo string
naoSei = false; // tipo boolean
let listaQualquer: any[] = [1, true, "String"];

/*
TIPO void
o tipo void é o contrario do tipo any, enquanto o tipo any
recebe todo mundo, o tipo void é usado em funções para não 
retornar valor nenhum 
*/
// usando o tipo void em funções
function imprimeTela(): void {
    console.log("tipo void não retorna nada!")
}
// forma de usar o tipo em variáveis
let qualqueCoisa: void = undefined;



/*************************************************************
TIPO ASSERTIONS
This guy tells the compiler that everything has 
already been tested for me.
Warnning:
Type assertions two forms: number one: angle-bracket
                           number two: sintaxe as
the a syntax is only used for the files with the jsx extension                       
**************************************************************/
let algumaCoisa: any = "Isto é uma string";
// Used syntax angle-bracket
let tamanhoString: number = (<string>algumaCoisa).length;
// Used a syntax as
let tamanho: number = (algumaCoisa as string).length;