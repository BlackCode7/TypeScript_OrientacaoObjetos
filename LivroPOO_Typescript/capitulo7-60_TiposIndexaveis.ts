interface InterfaceLista {
    [indices: number]: string;
}

let minhaLista: InterfaceLista;
minhaLista = ["Anderson martins", "Josy Martins"];
console.log(minhaLista);

let minhaString: InterfaceLista;
minhaString = ["Anderson Martins", "Simone Ferreira"];
console.log(minhaString);

let meuAmigo: string = minhaLista["1"];