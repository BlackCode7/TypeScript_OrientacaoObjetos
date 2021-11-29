function foo(arg: unknown) {
    if (typeof arg === 'string') {
        console.log(arg.toUpperCase());
    }
}

foo("Casa");