"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = (function () {
    function Model(lm) {
        var _this = this;
        this.lm = lm;
        if (this.libs) {
            this.libs.forEach(function (lib) {
                _this['__proto__'][lib.property] = _this.lm.getLibrary(lib.nameLibrary);
            });
            delete this.libs;
        }
    }
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map