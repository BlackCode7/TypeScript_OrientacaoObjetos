"use strict";
// https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var BugReport_1 = /** @class */ (function () {
    function BugReport_1(t) {
        this.type_1 = "report";
        this.title_1 = t;
    }
    BugReport_1.prototype.print = function (verbose) {
        if (verbose) {
            return "type: " + this.type_1 + "\ntitle_1: " + this.type_1;
        }
        else {
            return this.title_1;
        }
    };
    var _a;
    __decorate([
        validate_1,
        __param(0, required),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_a = typeof boolearn !== "undefined" && boolearn) === "function" ? _a : Object]),
        __metadata("design:returntype", void 0)
    ], BugReport_1.prototype, "print", null);
    return BugReport_1;
}());
