/*
decorator para métodos
Um decorator para métodos deve ser declarado antes da 
declaração do método. Ao se utilizar um method decorator 
recebemos 3 parâmetros. O primeiro parâmetro é o target
que é protótipo da classe, igual ao que vimos no property 
decorator. O segundo parâmetro é o propertyKey que é o 
nome do método em que estamos aplicando. Já o último é o 
propertyDescriptor, que é um conjunto de propriedades que 
definem uma propriedade de um objeto em JavaScript, neste 
objeto podemos ter acesso a propriedades como: configurable, 
enumerable, value e writable, além de get e set. Tendo 
acesso nesses 3 parâmetros, somos capazes de realizar quase 
qualquer operação em cima de nossos métodos.

Neste simples exemplo, será mostrado na tela name e 
changePassword. Como queremos alterar o enumerable para o 
valor false deste método para não mostrar na tela, basta 
alteramos a propriedade dentro do nosso propertyDescriptor.

Esse tipo de decorator é extremamente útil quando queremos 
aplicar mudanças no comportamento dos nossos métodos e como 
temos acesso a quase tudo que representa o método, se torna 
muito simples aplicarmos as mudanças que queremos.

*/

function enumerable(newValue: boolean){
    return(
        target: any,
        propertyKey: string,
        propertyDescriptor: PropertyDescriptor,
    ) => {
        propertyDescriptor.enumerable = newValue;
    }
}

class User{
    name: string = "Simone string";

    @enumerable(false)
    changePassword(newPassword: string){};
}

const user = new User();

for (const key in user) {
    console.log(key);
}