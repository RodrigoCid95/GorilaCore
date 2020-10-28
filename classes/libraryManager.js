"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = exports.LibraryManager = void 0;
var tslib_1 = require("tslib");
var log_1 = require("./log");
var LibraryManager = (function () {
    function LibraryManager(loaderConfig, libraries) {
        this.loaderConfig = loaderConfig;
        this.libraries = libraries;
        this.librariesInstances = {};
    }
    LibraryManager.prototype.build = function () {
        var _a, _b, _c, _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _i, _e, library, lib, nameLib, constntType, _f, _g, error_1;
            return tslib_1.__generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        _i = 0, _e = this.libraries;
                        _h.label = 1;
                    case 1:
                        if (!(_i < _e.length)) return [3, 9];
                        library = _e[_i];
                        lib = new library(this.loaderConfig);
                        nameLib = lib['__proto__']['constructor']['name'];
                        log_1.Log("Cargando " + nameLib + " ...", (_b = (_a = this.loaderConfig.getConfig('server')) === null || _a === void 0 ? void 0 : _a.dev) === null || _b === void 0 ? void 0 : _b.logger);
                        if (!lib['build']) {
                            console.error("No se encontro el m\u00E9todo build en la clase " + nameLib);
                            process.exit();
                        }
                        constntType = lib.build();
                        _h.label = 2;
                    case 2:
                        _h.trys.push([2, 6, , 7]);
                        if (!(constntType instanceof Promise)) return [3, 4];
                        _f = this.librariesInstances;
                        _g = nameLib;
                        return [4, constntType];
                    case 3:
                        _f[_g] = _h.sent();
                        return [3, 5];
                    case 4:
                        this.librariesInstances[nameLib] = constntType;
                        _h.label = 5;
                    case 5: return [3, 7];
                    case 6:
                        error_1 = _h.sent();
                        console.error("Error al cargar la librer\u00EDa " + nameLib + ".", error_1);
                        process.exit();
                        return [3, 7];
                    case 7:
                        log_1.Log(nameLib + " cargado!", (_d = (_c = this.loaderConfig.getConfig('server')) === null || _c === void 0 ? void 0 : _c.dev) === null || _d === void 0 ? void 0 : _d.logger);
                        _h.label = 8;
                    case 8:
                        _i++;
                        return [3, 1];
                    case 9: return [2];
                }
            });
        });
    };
    LibraryManager.prototype.getLibrary = function (name) {
        return this.librariesInstances[name];
    };
    return LibraryManager;
}());
exports.LibraryManager = LibraryManager;
var Library = (function () {
    function Library(loaderConfig) {
        this.loaderConfig = loaderConfig;
        this.log = log_1.Log;
        var className = this['__proto__']['constructor']['name'];
        this.profile = this.loaderConfig.getConfig(className);
    }
    return Library;
}());
exports.Library = Library;
//# sourceMappingURL=libraryManager.js.map