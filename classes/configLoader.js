"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoaderConfig = void 0;
var LoaderConfig = (function () {
    function LoaderConfig(profiles) {
        this.profiles = profiles;
    }
    LoaderConfig.prototype.getConfig = function (nameConfig) {
        return this.profiles[nameConfig];
    };
    return LoaderConfig;
}());
exports.LoaderConfig = LoaderConfig;
//# sourceMappingURL=configLoader.js.map