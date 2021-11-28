class Point_1 {
    constructor(public x: number, public y: number) {}
  }

class Line {
    private _start!: Point_1;
    private _end!: Point_1;
    @validate
    @Reflect.metadata("design:type", Point_1)
    set start(value: Point_1) {
      this._start = value;
    }
    get start() {
      return this._start;
    }
    @validate
    @Reflect.metadata("design:type", Point_1)
    set end(value: Point_1) {
      this._end = value;
    }
    get end() {
      return this._end;
    }
  }

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
let set = descriptor.set!;

    descriptor.set = function (value: T) {
        let type = Reflect.getMetadata("design:type", target, propertyKey);

        if (!(value instanceof type)) {
        throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
        }

        set.call(this, value);
    };
}

const line = new Line()
line.start = new Point(32323, 21)