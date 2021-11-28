"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    var existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}
function validate(target, propertyName, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var requiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
        if (requiredParameters) {
            for (var _i = 0, requiredParameters_1 = requiredParameters; _i < requiredParameters_1.length; _i++) {
                var parameterIndex = requiredParameters_1[_i];
                if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                    throw new Error("Missing required argument.");
                }
            }
        }
        return method.apply(this, arguments);
    };
}
