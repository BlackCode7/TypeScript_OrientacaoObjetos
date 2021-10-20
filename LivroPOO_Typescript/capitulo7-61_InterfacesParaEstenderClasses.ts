class Cliente
{
    private id: number;
    get Id(): number 
    {
        return this.id;
    }
    set Id(value: number) 
    {
        this.id = value;
    }
}
interface InterfaceCliente extends Cliente {
    NomeCliente: string;
}
class NovoCliente extends Cliente implements InterfaceCliente {
    NomeCliente: string;
}
class OutroCliente extends Cliente{
    NomeCliente: string;
}

let meuCliente = new OutroCliente;
meuCliente.NomeCliente = "Maria do carmo";
meuCliente.Id = 99;
console.log(meuCliente);

let meuOutroCliente = new OutroCliente;
meuOutroCliente.NomeCliente = "Simone Ferreira";
meuOutroCliente.Id = 100;
console.log(meuOutroCliente);