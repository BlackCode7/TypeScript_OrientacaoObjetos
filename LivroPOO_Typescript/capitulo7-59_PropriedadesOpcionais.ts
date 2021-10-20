// As interfaces são capazes de descrever uma grande quantidade 
// tipos de objetos 

interface InterfacePesquisa{
    (text: string, palavra: string): boolean;
}

// Atribuindo a uma variável
let FuncaoPesquisa: InterfacePesquisa;

FuncaoPesquisa = function(texto: string, pesquisa: string){
    let resultado = texto.search(pesquisa);
    if( resultado == 1 ){
        console.log(` não encontrada a palavra => ` + pesquisa);
        return false;
    }else{
        console.log(` Encontrada a palavra => ` + pesquisa);
        return true;
    }
}

FuncaoPesquisa(` um texto qualquer `, 'qualquer');
//FuncaoPesquisa(` um texto qualquer `)