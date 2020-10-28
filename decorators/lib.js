"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLib = void 0;
function setLib(nameLibrary) {
    return function (target, propertyKey) {
        if (!target.hasOwnProperty('libs')) {
            target['libs'] = [];
        }
        target['libs'].push({
            property: propertyKey,
            nameLibrary: nameLibrary
        });
    };
}
exports.setLib = setLib;
//# sourceMappingURL=lib.js.map