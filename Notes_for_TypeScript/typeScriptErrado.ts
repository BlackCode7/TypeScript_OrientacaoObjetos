function confirm(value:boolean){
    return function(target: any, propertyKey:string, descriptor:PropertyDescriptor){
        descriptor.configurable = value;
    }
}

class Point_2{
    constructor(teste1:number, teste2:number){
        this.teste1 = teste1;
        this.teste2 = teste2;
    }

    @confirm(true)
    get teste1(){
        return this.teste1;
    }
    @confirm(true)
    set teste1(True){
        this.teste1 = true;
    }
    @confirm(true)
    set teste2(value:any){
        this.teste1 = value;
    }
    @confirm(true)
    set teste1(True){
        this.teste1 = true;
    }
}
