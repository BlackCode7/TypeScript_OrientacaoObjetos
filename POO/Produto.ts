class Produto{
    constructor(
        public nome: string,
        public descricao: string,       
        public preco: number,
        public fabricante: string,
    ){}
}

let salsicha: Produto = new Produto("salsicha", "bom", 20.0, "cache");
console.log('nome do produto >>> ',salsicha)