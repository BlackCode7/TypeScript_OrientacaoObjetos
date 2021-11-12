// Sometimes it is required to implement Enum on your own.
// E.g. there is no clear way to extend other enums.
// Custom implementation allows this:

// enum SourceEnum{
//     value_0 = <any>'value',
//     value_1 = <any>'value1'
// }

// enum AdditionToSourceEnum {
//     value_2 = <any>'value2',
//     value_3 = <any>'value3'
// }
// type TestEnumType = SourceEnum | AdditionToSourceEnum;
// let TestEnum = Object.assign({}, SourceEnum, AdditionToSourceEnum);


class Enum {
    constructor(protected value : string) {}
    public toString() {
        return String(this.value);
    }
    public is(value : Enum | string) {
        return this.value = value.toString();
    }
}

class SourceEnum extends Enum {
    public static value1 = new SourceEnum('value1');
    public static value2 = new SourceEnum('value2');
}

class TestEnum extends SourceEnum {
    public static value3 = new TestEnum('value3');
    public static value4 = new TestEnum('value4');
}

function check(test: TestEnum) {
    return test === TestEnum.value2;
}

let value1 = TestEnum.value1;
console.log(value1 + 'hello');
console.log(value1.toString() === 'value1');
console.log(value1.is('value1'));
console.log(! TestEnum.value3.is(TestEnum.value3));
console.log(check(TestEnum.value2));
// this works but perhaps your TSLint would complain
// attention! does not work with ===
// use .is() instead
console.log(TestEnum.value1 == <any> 'value1');
