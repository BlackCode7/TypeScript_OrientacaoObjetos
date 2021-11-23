// Decorator of the property
function logProperty_1(target:any, key:any){
    const newKey = `_${key}`;
    Object.defineProperty(target, key, {
        get(){
            console.log(`Get: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newVal){
            console.log(`Set ${key} => ${newVal}`);
            this[newKey] = newVal;
        },
        enumerable: true,
        configurable: true
    })
}

// Decorating property 
class Task2{
    @logProperty_1
    public _id2: number;
    @logProperty_1
    public _title2: string;

    // Initialize in constructor propertyKey
    constructor(id2: number, title2: string){
        this._id2 = id2;
        this._title2 = title2;
    }
}

const task2 = new Task2(1, "Resivando decorator of the property");
const task3 = new Task2(2, "Revisando decotador test two");
console.log(task2._id2, task2._title2)
console.log(task3._id2, task3._title2)