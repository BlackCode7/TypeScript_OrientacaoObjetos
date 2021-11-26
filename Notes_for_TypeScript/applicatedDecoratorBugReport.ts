function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

@sealed
class BugReport{
    type = "report";
    title: string;
    constructor(t: string){ 
        this.title = t;
    }
} 

const bug = new BugReport("Needs dark mode");
console.log(bug.title, bug.type);
console.log(bug.type);