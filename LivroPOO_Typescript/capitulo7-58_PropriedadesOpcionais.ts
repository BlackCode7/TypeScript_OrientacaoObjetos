// propriedades de uma interface opcionais ?

interface tipoDocumento{
    nome: string;
    tamanho ?: number;
}

function documento(tipo: tipoDocumento){
    if (tipo.tamanho == 11 && tipo.nome == 'CPF') {
        console.log("numero de caracteres: ")
    }else{
        console.log("Não esta definido!")
    }
}
// cria uma variavel e atribui a ela os valores {tamanho: 11, nome: 'CPF'}
let meuDocumento = {tamanho: 11, nome: 'CPF'};
// faz a chamada da função documento(meuDocumento) e passa a variavel meuDocumento
documento(meuDocumento);