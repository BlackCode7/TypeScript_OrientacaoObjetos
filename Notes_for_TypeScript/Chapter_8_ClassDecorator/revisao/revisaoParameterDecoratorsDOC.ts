// https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators

class BugReport_1{
    type_1 = "report";
    title_1: string;

    constructor(t: string){ 
        this.title_1 = t; 
    }

    @validate_1
    print(@required verbose: boolearn){
        if (verbose){
            return `type: ${this.type_1}\ntitle_1: ${this.type_1}`;
        }else{
            return this.title_1;
        }
    }
}