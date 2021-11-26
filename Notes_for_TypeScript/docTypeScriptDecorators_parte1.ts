function first() {
    console.log("First(): factory evaluated");
    return function (target: any, propertyKey: string, description:PropertyDescriptor) {
        console.log("first(): called");
    }
}

function second(){
    console.log("Second(): factory evaluated");
    return function (target: any, propertyKey: string, description:PropertyDescriptor){
        console.log("Second(): called");
    }
}

class ExampleClass{
    @first()
    @second()
    method(){}
}
